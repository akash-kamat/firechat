import React from 'react'
import './css/Chat.css'
export default function Chat({ data, user, loggedIn }) {
    if (loggedIn) {
        return (
            <div className='msg-block-logged'>
                <div className='chat-flex-logged'>
                    <div className='dp-container'>
                        <img className='dp' src={data.dp} />
                    </div>
                    <div className='msg-container'>
                        <p className='message'>
                            {data.msg}
                        </p>
                    </div>
                </div>
                <div className='date-time-container-logged'>
                    <h9 className='msg-time'>
                        {new Date(data.time).toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })}
                    </h9>
                    <h10 className="msg-date">
                        {new Date(data.time).toLocaleDateString()}
                    </h10>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='msg-block'>
                <div className='chat-flex'>
                    <div className='dp-container'>
                        <img className='dp' src={data.dp} />
                    </div>
                    <div className='msg-container'>
                        <p className='message'>
                            {data.msg}
                        </p>
                    </div>
                </div>
                <div className='date-time-container'>
                    <h9 className='msg-time'>
                        {new Date(data.time).toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })}
                    </h9>
                    <h10 className="msg-date">
                        {new Date(data.time).toLocaleDateString()}
                    </h10>
                </div>
            </div>
        )
    }
}
