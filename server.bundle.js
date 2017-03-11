/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DevTools = undefined;
exports.configureStore = configureStore;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(21);

var _reduxDevtools = __webpack_require__(22);

var _reduxDevtoolsLogMonitor = __webpack_require__(24);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(23);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

var _reactRouterRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by khangpv on 3/11/17.
                                                                                                                                                                                                     */


// const store = createStore(reducers);
// export default store;


var DevTools = exports.DevTools = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
    _reduxDevtoolsDockMonitor2.default,
    { toggleVisibilityKey: 'ctrl-h', changePositionKey: 'ctrl-q' },
    _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, { theme: 'tomorrow', preserveScrollTop: false })
));

function configureStore(history, initialState) {
    var reducer = (0, _redux.combineReducers)({
        routing: _reactRouterRedux.routerReducer
    });

    var devTools = [];
    if (typeof document !== 'undefined') {
        devTools = [DevTools.instrument()];
    }

    var store = (0, _redux.createStore)(reducer, initialState, _redux.compose.apply(undefined, [(0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(history))].concat(_toConsumableArray(devTools))));

    return store;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var history = _reactRouter.browserHistory;

    if (props.store) {
        history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, props.store);
    }

    return _react2.default.createElement(
        _reactRouter.Router,
        { history: history },
        _react2.default.createElement(
            _reactRouter.Route,
            { component: _App2.default },
            _react2.default.createElement(_reactRouter.Route, { path: '/', component: _dealsContainer2.default })
        )
    );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(2);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _dealsContainer = __webpack_require__(18);

var _dealsContainer2 = _interopRequireDefault(_dealsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(20);

module.exports = {
    entry: "./src/client.js",
    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Home
var GET_DEALS_SUCCESS = exports.GET_DEALS_SUCCESS = 'GET_DEALS_SUCCESS';

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDealsSuccess = getDealsSuccess;

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getDealsSuccess(deals) {
  return {
    type: types.GET_DEALS_SUCCESS,
    deals: deals
  };
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeals = getDeals;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _store = __webpack_require__(3);

var _store2 = _interopRequireDefault(_store);

var _homeActions = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all deals
 */

function getDeals() {
  return _axios2.default.get('https://dev.jamja.vn/api/v3/searchdeal/').then(function (response) {
    console.log(response);
    _store2.default.dispatch((0, _homeActions.getDealsSuccess)(response.data.objects));
    return response;
  });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
            'h1',
            null,
            'test api server rendering'
        ),
        props.children
    );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { key: props.id, className: 'data-list-item' },
        _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement(
                _reactRouter.Link,
                { to: '/deal/' + props.id },
                props.title
            )
        )
    );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'data-list' },
        props.deals.map(function (deal) {
            return _react2.default.createElement(_DealItem2.default, deal);
        })
    );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DealItem = __webpack_require__(16);

var _DealItem2 = _interopRequireDefault(_DealItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _DealList = __webpack_require__(17);

var _DealList2 = _interopRequireDefault(_DealList);

var _dealApi = __webpack_require__(14);

var dealApi = _interopRequireWildcard(_dealApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DealContainer = _react2.default.createClass({
  displayName: 'DealContainer',


  componentDidMount: function componentDidMount() {
    dealApi.getDeals();
  },

  render: function render() {
    return _react2.default.createElement(_DealList2.default, { deals: this.props.deals });
  }

});

var mapStateToProps = function mapStateToProps(store) {
  return {
    deals: store.homeState.deals
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(DealContainer);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _serializeJavascript = __webpack_require__(9);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _webpack = __webpack_require__(10);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(11);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpack3 = __webpack_require__(6);

var _webpack4 = _interopRequireDefault(_webpack3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _reactRouter = __webpack_require__(1);

var _store = __webpack_require__(3);

var _reactRedux = __webpack_require__(4);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by khangpv on 3/11/17.
 */

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
// app.use(express.static('files'))

app.use((0, _webpackDevMiddleware2.default)((0, _webpack2.default)(_webpack4.default), {
    publicPath: '/public/',
    stats: {
        colors: true
    }
}));

var HTML = function HTML(_ref) {
    var content = _ref.content,
        store = _ref.store;
    return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
            'body',
            null,
            _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: content } }),
            _react2.default.createElement('div', { id: 'devtools' }),
            _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.__initialState__=' + (0, _serializeJavascript2.default)(store.getState()) + ';' } }),
            _react2.default.createElement('script', { src: '/public/bundle.js' })
        )
    );
};

app.use(function (req, res) {
    var memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
    var store = (0, _store.configureStore)(memoryHistory);
    var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

    (0, _reactRouter.match)({ history: history, routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var content = (0, _server.renderToString)(_react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            ));

            res.send('<!doctype html>\n' + (0, _server.renderToString)(_react2.default.createElement(HTML, { content: content, store: store })));
        }
    });
});

var PORT = 3000;

app.listen(PORT, function () {
    console.log('Server listening on http://localhost:' + PORT + ', Ctrl+C to stop');
});

/***/ })
/******/ ]);