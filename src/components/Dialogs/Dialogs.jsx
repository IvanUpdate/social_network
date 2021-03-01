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
};

//пока оставим эти компоненты здесь
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
};

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Ilya"},
        {id: 3, name: "Luda"},
        {id: 4, name: "Evgen"},
        {id: 5, name: "Masha"},
        {id: 6, name: "Ibragim"},
    ];

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you doing?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ];

    let dialogElements = dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} />);
    let messagesElements = messagesData.map(message => <Message message = {message.message} id = {message.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;