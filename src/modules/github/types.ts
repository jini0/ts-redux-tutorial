import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';

export type GithubAction = ActionType<typeof actions>

export type GithubState = {
    userProfile: {
        loading: boolean;
        error: Error | null;            //error는 Error 타입이거나 null
        data: GithubProfile | null;
    };
};