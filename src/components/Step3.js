import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseSauce } from '../rootSlice';

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sauce = useSelector((state) => state.sauce);
  const { register, handleSubmit } = useForm({ defaultValues: { sauce } });

  const onSubmit = (data) => {
    dispatch(chooseSauce(data.sauce));
    history.push('./step4');
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='sauce'>Pick sauce:</label>
        <select id='sauce' name='sauce' ref={register}>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
        <button>Next</button>
        <button onClick={handleBack}>Back to step 2</button>
      </div>
    </form>
  );
};
