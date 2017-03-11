import React from 'react';
import { connect } from 'react-redux';
import DealList from '../DealList'
import * as dealApi from '../../api/deal-api';

const DealContainer = React.createClass({

  componentDidMount: function() {
    dealApi.getDeals();
  },

  render: function() {
    return (
      <DealList deals={this.props.deals}  />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    deals: store.homeState.deals
  };
};

export default connect(mapStateToProps)(DealContainer);
