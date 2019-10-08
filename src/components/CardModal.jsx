import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import close from '../../styles/img/close.svg'

const Card = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    border: none;
`

const CloseBtn = styled.button`
    height: 50px;
    width: 50px;
    background: transparent;
    cursor: pointer;
    float: right;
    border: none;
`;

const formatAmmount = (amount) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  return formatter.format(amount)
}

const CardModal = (props) => {
    const {item, handleCloseClick} = props;

    return (
      <Card>
          <CloseBtn onClick={handleCloseClick}>
            <span dangerouslySetInnerHTML={{__html: close}}/>
          </CloseBtn>
        <h2> { item.mission_name } </h2>
        <p> Cost per Launch: { formatAmmount(item.cost_per_launch) } </p>
        <p> Rocket ID Number: { item.rocket_id } </p>

        <p>
            {item.description}
        </p>

      </Card>
    )
}

CardModal.propTypes = {
    item: PropTypes.object,
    handleCloseClick:  PropTypes.func
}

export default CardModal;
