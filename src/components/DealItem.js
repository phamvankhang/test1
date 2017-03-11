/**
 * Created by khangpv on 3/11/17.
 */
import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div key={props.id} className="data-list-item">
            <div className="details">
                <Link to={'/deal/' + props.id}>{props.title}</Link>
            </div>
        </div>
    );
}
