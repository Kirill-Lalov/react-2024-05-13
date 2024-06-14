import { FC, FormEvent, useReducer } from 'react';

import { useCreateReviewMutation } from '@redux/service/api/api';

import { Preloader } from '@components/Preloader';
import { Button } from '@components/Button';
import { Rating } from '@components/Rating';

import { ActionType, FormType } from './types';

function reducer(state: FormType, action: ActionType) {
  switch (action.type) {
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
  text: '',
  rating: 5,
};

export type ReviewFormProps = {
  restaurantId: string;
  className?: string;
};

export const ReviewForm: FC<ReviewFormProps> = ({ restaurantId, ...props }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [createReview, { isLoading }] = useCreateReviewMutation();

  function handleCreateReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    createReview({
      restaurantId,
      review: {
        userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
        ...form,
      },
    });

    dispatch({ type: 'submit' });
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <form onSubmit={handleCreateReview} {...props}>
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
