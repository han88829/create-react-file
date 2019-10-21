import * as React from 'react';
import { connect } from 'dva';
import { Dispatch, AnyAction } from 'redux';
import { ConnectProps, ConnectState } from '@/models/connect';
import "./index.less";

export interface IAppProps extends ConnectProps {
    dispatch: Dispatch<AnyAction>;
}

@connect(({

}: ConnectState) => ({

}))
export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <div>

            </div>
        );
    }
}
