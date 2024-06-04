export type UserType = {
  username: string;
  isLogin: boolean;
};

type SetUsernameActionType = {
  type: 'setUsername';
  payload: string;
};

type ResetUsernameActionType = {
  type: 'resetUsername';
};

type LoginActionType = {
  type: 'login';
};

type LogoutActionType = {
  type: 'logout';
};

export type ActionType = SetUsernameActionType | ResetUsernameActionType | LoginActionType | LogoutActionType;
