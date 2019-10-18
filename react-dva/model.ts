import { Effect } from 'dva';
import { Reducer } from 'redux';


export interface AppModelState {

}

export interface AppModelType {
    namespace: 'app';
    state: AppModelState;
    effects: {
        fetch: Effect;
    };
    reducers: {
        updateData: Reducer<AppModelState>;
    };
}

const UserModel: AppModelType = {
    namespace: 'app',

    state: {

    },

    effects: {
        *fetch({ payload }, { call, put }) {

        }
    },

    reducers: {
        updateData(state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
    },
};

export default UserModel;
