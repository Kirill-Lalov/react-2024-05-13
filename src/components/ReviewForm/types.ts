export type FormType = {
  text: string;
  rating: number;
};

type SetTextActionType = {
  type: 'setText';
  payload: string;
};

type SetRatingActionType = {
  type: 'setRating';
  payload: number;
};

type SubmitActionType = {
  type: 'submit';
};

export type ActionType = SetTextActionType | SetRatingActionType | SubmitActionType;
