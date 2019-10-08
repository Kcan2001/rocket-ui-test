import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded, showCardModal, hideCardModal} from "../actions/Launches";

import CardModal from '../components/CardModal';
import LaunchCard from '../components/LaunchCard';

const CardGrid = styled.div`
     display: block;

    @media (min-width: 768px) {
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
  }
`;

class LaunchesView extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    launchesCollection: PropTypes.object,
    launchCollection: PropTypes.object
  }

  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    if (launchCollection.modal.active) {
      return <CardModal handleCloseClick={() => this.handleCloseClick()} item={launchCollection.modal.data}/>;
    }

      return (
        <CardGrid>
          {launchCollection.launches.map((item) => <LaunchCard key={item.id} handleCardClick={() => this.handleCardClick(item)} launch={item}/>)}
        </CardGrid>
      )
  }

  handleCloseClick = () => {
    const { dispatch } = this.props;

    hideCardModal({dispatch});
  }

  handleCardClick = (item) => {
    const { dispatch } = this.props;

    showCardModal({dispatch, item});
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
