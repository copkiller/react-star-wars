import { omit } from 'lodash';
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "@store/constants/actionTypes";
import { getLocalStorage } from '../../utils/localStorage';

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload
			}
		case REMOVE_PERSON_FROM_FAVORITE:
			//! may way
			// const newObj = { ...state };
			// delete newObj[action.payload];
			// return newObj;

			//! from google (personal pref)
			// const { [action.payload]: obj, ...rest } = state
			// return { ...rest }

			//! lodash omit method
			return omit(state, [action.payload]);
		default:
			return state;
	}
}

export default favoriteReducer;