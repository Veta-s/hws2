import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort':
            if (action.payload === 'up') {
                return state.slice().sort((a, b) => a.name.localeCompare(b.name));
            } else {
                return state.slice().sort((a, b) => b.name.localeCompare(a.name));
            }

        case 'check':
            return state.filter(user => user.age >= action.payload);

        default:
            return state;
    }
}
