import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} />);
    let messagesElements = props.state.messagesData.map(message => <Message message = {message.message} id = {message.id}/>);

    let addMessage = React.createRef();

    let addTextMessage = () => {
        const message = addMessage.current.value;
        alert(message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.addMessage}>
                <textarea ref= { addMessage }></textarea>
                <div>
                <button onClick= { addTextMessage }>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;