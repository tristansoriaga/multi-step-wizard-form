import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetState } from '../rootSlice';

export const Result = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetState());
  };

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to='/'>Start over</Link>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
