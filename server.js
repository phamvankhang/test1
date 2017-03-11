/**
 * Created by khangpv on 3/11/17.
 */


import express from 'express'
import serialize from 'serialize-javascript'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config'

import React from 'react'
import {renderToString} from 'react-dom/server'
import {createMemoryHistory, match, RouterContext} from 'react-router'
import {configureStore} from './src/store'
import {Provider} from 'react-redux'
import routes from './src/routes'
import {syncHistoryWithStore} from 'react-router-redux'

const app = express()

app.use(express.static('public'))
// app.use(express.static('files'))

app.use(webpackDevMiddleware(webpack(webpackConfig), {
    publicPath: '/public/',
    stats: {
        colors: true
    }
}))

const HTML = ({content, store}) => (
    <html>
    <body>
    <div id="root" dangerouslySetInnerHTML={{__html: content}}/>
    <div id="devtools"/>
    <script dangerouslySetInnerHTML={{__html: `window.__initialState__=${serialize(store.getState())};`}}/>
    <script src="/public/bundle.js"/>
    </body>
    </html>
)

app.use(function (req, res) {
    const memoryHistory = createMemoryHistory(req.url)
    const store = configureStore(memoryHistory)
    const history = syncHistoryWithStore(memoryHistory, store)

    match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            const content = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
            )

            res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
        }
    })
})

const PORT = 3000

app.listen(PORT, function () {
    console.log('Server listening on http://localhost:'+PORT+', Ctrl+C to stop')
})
