import { ActionTypes } from 'actions';

export default function(state, action){
  switch(action.type){
    case ActionTypes.SELECT_LANGUAGE:
      return action.payload;
    default:
      return {
        id:    'en-uk',
        label: 'English'
      };
  }

}
