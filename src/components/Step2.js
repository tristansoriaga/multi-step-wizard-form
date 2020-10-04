import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseCrust } from '../rootSlice';

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const crust = useSelector((state) => state.crust);
  const { register, handleSubmit } = useForm({ defaultValues: { crust } });

  const onSubmit = (data) => {
    dispatch(chooseCrust(data.crust));
    history.push('./step3');
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='crust'>Pick crust:</label>
        <select id='crust' name='crust' ref={register}>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
        <button>Next</button>
        <button onClick={handleBack}>Back to step 1</button>
      </div>
    </form>
  );
};
