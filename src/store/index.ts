import { AnyAction, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { User } from '../types/UserType';

const GET_USERS = 'GET_USERS';
const GET_USERID = 'GET_USERID';
const GET_ERROR = 'GET_ERROR';
const OPEN_FORM = 'OPEN_FORM';
const CORRECT_FORM = 'CORRECT_FORM';
const GET_START = 'GET_START';

export const actions = {
  getLocalUsers: (users: User[]) => ({
    type: GET_USERS,
    users,
  }),
  getLocalUserId: (userId: number) => ({
    type: GET_USERID,
    userId,
  }),
  getError: (messageError: string) => ({
    type: GET_ERROR,
    messageError,
  }),
  getIsOpenForm: (isOpenForm: boolean) => ({
    type: OPEN_FORM,
    isOpenForm,
  }),
  getIsCorrectForm: (isCorrectForm: boolean) => ({
    type: CORRECT_FORM,
    isCorrectForm,
  }),
  getStartIndex: (start: number) => ({
    type: GET_START,
    start,
  }),
};

export const selectors = {
  loadUsers: (state: RootState) => state.users,
  getUserId: (state: RootState) => state.userId,
  getMessageError: (state: RootState) => state.messageError,
  getIsOpenForm: (state: RootState) => state.isOpenForm,
  getIsCorrectForm: (state: RootState) => state.isCorrectForm,
  getStartIndex: (state: RootState) => state.start,
};

export type RootState = {
  users: User[],
  userId: number,
  messageError: string,
  isOpenForm: boolean,
  isCorrectForm: boolean,
  start: number,
};

const initialState: RootState = {
  users: [],
  userId: 0,
  messageError: '',
  isOpenForm: false,
  isCorrectForm: false,
  start: 0,
};

const rootReducer = (
  state = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users };

    case GET_USERID:
      return { ...state, userId: action.userId};

    case GET_ERROR:
      return { ...state, messageError: action.messageError };

    case OPEN_FORM:
      return { ...state, isOpenForm: action.isOpenForm };

    case CORRECT_FORM:
      return { ...state, isCorrectForm: action.isCorrectForm };

    case GET_START:
      return { ...state, start: action.start };

    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
