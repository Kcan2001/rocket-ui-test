import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Card = styled.button`
    background-color: white;
    width: 100%;
    margin: 6px 0;
    height: 200px;
    border: none;
    border-radius: 26px;
    cursor: pointer;

    @media (min-width: 768px) {
        padding: 36px;
        margin: 1%;
        width: 250px;
  }

  @media (min-width: 1024px) {
        width: 300px;
  }
`

const LaunchCard = (props) => {
    const {launch, handleCardClick} = props;

    return (
      <Card onClick={handleCardClick}>
        <h2> { launch.mission_name } </h2>
        <div> Flight Number: { launch.flight_number } </div>
      </Card>
    )
}

LaunchCard.propTypes = {
    launch: PropTypes.object,
    handleCardClick:  PropTypes.func
}

export default LaunchCard;
