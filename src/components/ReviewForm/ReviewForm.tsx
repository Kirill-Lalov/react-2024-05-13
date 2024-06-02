import { FC, useReducer } from 'react';

import { Button } from '@components/Button';
import { Rating } from '@components/Rating';

import { ActionType, FormType } from './types';

function reducer(state: FormType, action: ActionType) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setText':
      return { ...state, text: action.payload };
    case 'setRating':
      return { ...state, rating: action.payload };
    case 'submit':
      return INITIAL_STATE;
    default:
      return state;
  }
}

const INITIAL_STATE: FormType = {
  name: '',
  text: '',
  rating: 5,
};

export const ReviewForm: FC = ({ ...props }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      dispatch({ type: 'submit' });
    }} {...props}>
      <div>
        <label>
          Имя
          <input
            required
            type='text'
            value={form.name}
            onChange={(event) => dispatch({ type: 'setName', payload: event.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Текст
          <textarea
            required
            value={form.text}
            onChange={(event) => dispatch({ type: 'setText', payload: event.target.value })}
          />
        </label>
      </div>
      <Rating rating={form.rating} onChange={(rating) => dispatch({ type: 'setRating', payload: rating })} />
      <Button type='submit'>Отправить</Button>
    </form>
  );
};
