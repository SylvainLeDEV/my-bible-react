import React from 'react';
import {MessageInt} from "../model";

type Props = {
    messData: MessageInt[];
    message: MessageInt;
    setMessage: React.Dispatch<React.SetStateAction<MessageInt[]>>;
};

const Message = ({messData, message, setMessage}: Props) => {


    const formaterDate = (date:number ) => {
        return new Date(date).toLocaleString('fr-FR', {
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className='messageContainer'>
            <h3>{message.name}</h3>
            <p>{message.message}</p>
            <span>{formaterDate(message.date)}</span>
            <button onClick={() => {
                setMessage(messData.filter(mess => mess.id !== message.id));
            }}>Supprimer</button>
        </div>
    );
};

export default Message;