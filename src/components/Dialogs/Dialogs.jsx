import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

//пока оставим эти компоненты здесь
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Ivan" id="1" />
                <DialogItem name="Ilya" id="2" />
                <DialogItem name="Luda" id="3" />
                <DialogItem name="Evgen" id="4" />
                <DialogItem name="Masha" id="5" />
                <DialogItem name="Ibragim" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you doing?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;