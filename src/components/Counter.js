import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/counter';

import styles from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const increaseHandler = function(amount) {
        dispatch(counterActions.increase(amount));
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
      <main className={styles.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={styles.value}>{counter}</div>}
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler.bind(null, 5)}>Increase By 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
};

export default Counter;