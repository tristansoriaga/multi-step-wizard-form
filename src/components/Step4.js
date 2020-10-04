import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseCheese } from '../rootSlice';

export const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cheese = useSelector((state) => state.cheese);
  const { register, handleSubmit } = useForm({ defaultValues: { cheese } });

  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    history.push('./result');
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='cheese'>Pick cheese:</label>
        <select id='cheese' name='cheese' ref={register}>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
        <button>Next</button>
        <button onClick={handleBack}>Back to step 3</button>
      </div>
    </form>
  );
};
