export type FormType = {
  name: string;
  text: string;
  rating: number;
};

type SetNameActionType = {
  type: 'setName';
  payload: string;
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

export type ActionType = SetNameActionType | SetTextActionType | SetRatingActionType | SubmitActionType;
