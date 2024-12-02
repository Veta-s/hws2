type InitStateType = {
    themeId: number;
};


const initState:InitStateType = {
    themeId: 1,
};

type SetThemeIdActionType = {
    type: 'SET_THEME_ID';
    id: number;
};

type ActionsType = SetThemeIdActionType;

export const themeReducer = (state = initState, action: ActionsType):InitStateType=> {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id };
        default:
            return state;
    }
};

export const changeThemeId = (id: number): SetThemeIdActionType => ({ type: 'SET_THEME_ID', id });

// export type StateType = {
//     themeId: number;
// };
