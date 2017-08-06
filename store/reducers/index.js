import { combineReducers } from 'redux';
import LocalesReducer from './reducer_locales';
import MessagesReducer from './reducer_messages';
import SelectedLanguageReducer from './reducer_selected_language';

const rootReducer = combineReducers({
  locales:  LocalesReducer,
  messages: MessagesReducer,
  selectedLanguage: SelectedLanguageReducer
});

export default rootReducer;
