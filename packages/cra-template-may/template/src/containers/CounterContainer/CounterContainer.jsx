import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from 'store/entities/counterSlice';
import Counter from 'components/Counter';

const CounterContainer = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(2);

  const onChangeAmount = useCallback(({ target }) => {
    setIncrementAmount(parseInt(target?.value || 0, 10));
  }, []);

  const onIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const onDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const onIncrementByAmount = useCallback(() => {
    dispatch(incrementByAmount(incrementAmount));
  }, [dispatch, incrementAmount]);

  const onIncrementByAmountAsync = useCallback(() => {
    dispatch(incrementAsync(incrementAmount));
  }, [dispatch, incrementAmount]);

  return (
    <Counter
      value={count}
      incrementAmount={incrementAmount}
      onChangeAmount={onChangeAmount}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onIncrementByAmount={onIncrementByAmount}
      onIncrementByAmountAsync={onIncrementByAmountAsync}
    />
  );
};

export default CounterContainer;
