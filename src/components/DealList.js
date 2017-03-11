/**
 * Created by khangpv on 3/11/17.
 */
import React from 'react';
import DealItem from './DealItem';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">
            {
                props.deals.map(deal => {
                    return (
                        <DealItem {...deal} />
                    );
                })
            }
        </div>
    );
}
