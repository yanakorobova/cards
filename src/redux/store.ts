import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {appReducer} from "./reducers/app-reducer";
import {loginReducer} from "./reducers/login-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {signUpReducer} from "./reducers/signUp-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk, {ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    signUp: signUpReducer,
    profile: profileReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

//@ts-ignore
window.store = store