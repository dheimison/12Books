import { combineReducers } from 'redux';

import selectedBook from 'pages/BookDetail/reducer';

const rootReducer = combineReducers({ selectedBook });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
