import { INPUT_UPDATE, SUBMIT_CLEAR, SEARCH_ERROR, ERROR_TEXT} from '../actions/weatherActions';
import initialState from './initialState';

const inputReducer = (state = initialState, action) => {
  switch(action.type){
    case INPUT_UPDATE : {
      return {
        ...state,
        input: action.payload.target.value
      };
    }
    case SUBMIT_CLEAR : {
      return {
        ...state,
        input: ''
      };
    }
    case SEARCH_ERROR : {
      return {
        ...state,
        error: action.payload
      };
    }
    case ERROR_TEXT : {
      return{
        ...state,
        errortext: action.payload
      }
    }
    default: 
      return state;
  }
};

export default inputReducer;