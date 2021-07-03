import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

import Button from 'components/mui/Button';
import s from './Counter.module.css';

const Counter = props => {
  const {
    value,
    incrementAmount,
    onIncrement,
    onDecrement,
    onChangeAmount,
    onIncrementByAmount,
    onIncrementByAmountAsync,
  } = props;

  return (
    <div>
      <div className={s.row}>
        <IconButton
          className={s.button}
          color="primary"
          aria-label="Increment value"
          onClick={onIncrement}
        >
          <Add />
        </IconButton>
        <Typography variant="h5" className={s.value}>
          {value}
        </Typography>
        <IconButton
          className={s.button}
          color="primary"
          aria-label="Decrement value"
          onClick={onDecrement}
        >
          <Remove />
        </IconButton>
      </div>
      <div className={s.row}>
        <TextField
          variant="outlined"
          className={s.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={onChangeAmount}
        />
        <Button className={s.button} onClick={onIncrementByAmount}>
          Add Amount
        </Button>
        <Button className={s.asyncButton} onClick={onIncrementByAmountAsync}>
          Add Async
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
  incrementAmount: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onChangeAmount: PropTypes.func,
  onIncrementByAmount: PropTypes.func,
  onIncrementByAmountAsync: PropTypes.func,
};

export default Counter;
