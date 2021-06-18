import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div>
    <input className={styles.input}
      type='text'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder={'Put your name here'}/>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;