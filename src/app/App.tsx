import React from 'react';
import s from './App.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../features/NotFound/Error404";
import {NewPassword} from "../features/NewPassword/NewPassword";
import {SuperComponent} from "../features/Test/SuperComponent";
import {SignUp} from "../features/SignUp/SignUp";
import {PasswordRecovery} from "../features/PasswordRecovery/PasswordRecovery";
import {Profile} from "../features/Profile/Profile";
import {Login} from "../features/Login/Login";


export const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile',
    SIGNUP: '/signUp',
    NOT_FOUND_ERR: '/404',
    NEW_PASSWORD: '/new_password',
    PASSWORD_RECOVERY: '/password_recovery',
    TEST_COMPONENTS:'/test_components'
} as const

function App() {
    return (
        <div className={s.App}>
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.SIGNUP} element={<SignUp/>}/>
                <Route path={PATH.NOT_FOUND_ERR} element={<Error404/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.TEST_COMPONENTS} element={<SuperComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
