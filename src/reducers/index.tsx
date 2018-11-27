import { combineReducers } from 'redux';
import { User } from './../models';

export interface IState {
    currentUser: User | null;
}

interface ITableAction {
    type: string;
    payload: any;
}

export const rootReducer = combineReducers<IState, ITableAction>({
    currentUser: (state = null, action) => {
        switch (action.type) {
            case 'CHANGE_USER': 
                return action.payload
            default:
                return state;
        }
    }
});