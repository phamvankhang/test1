/**
 * Created by khangpv on 3/11/17.
 */
import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="app">
            <h1>test api server rendering</h1>
            {props.children}
        </div>
    );
}
