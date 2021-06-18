import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';


const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker className={styles.input}
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
      placeholderText={'Pick start date'} />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;