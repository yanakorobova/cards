
import {combineReducers, legacy_createStore} from "redux";
import {appReducer} from "./reducers/app-reducer";
import {loginReducer} from "./reducers/login-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {signUpReducer} from "./reducers/signUp-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    signUp: signUpReducer,
    profile: profileReducer
})

export const store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//@ts-ignore
window.store = store