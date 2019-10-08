import LaunchService from '../services/LaunchService';
import RocketService from '../services/RocketService';

export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  SHOW_LAUNCH_MODAL: 'SHOW_LAUNCH_MODAL',
  HIDE_LAUNCH_MODAL: 'HIDE_LAUNCH_MODAL'
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

export const showLaunchModal = payload => ({
  type: ACTIONS.SHOW_LAUNCH_MODAL,
  payload
});

export const hideLaunchModal = () => ({
  type: ACTIONS.HIDE_LAUNCH_MODAL
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const showCardModal = ({ dispatch, item }) => {
  return RocketService.get(item.rocket.rocket_id).then(response => dispatch(showLaunchModal(response.data)));
}

export const hideCardModal = ({ dispatch }) => dispatch(hideLaunchModal());

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return LaunchService.get().then(response => dispatch(receiveLaunches(response)));
};

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);
