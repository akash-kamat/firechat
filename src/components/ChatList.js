import React from 'react'
import { ref, onValue, query, orderByChild } from "firebase/database";
import { useState, useEffect } from 'react'
import Chat from './Chat';
import './css/ChatList.css'

export default function ChatList({ db, user }) {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        onValue(ref(db, "messages/"), (snapshot) => {
            const data = [];
            snapshot.forEach(e => {
                data.push(e.val())
            })
            setChats(data)


        })
    }, [])
    return (
        <div className='all-chats' id='allChats'>
            {
                chats.map((e, i) => {
                    if (e.uid == user.uid) {

                        return <Chat data={e} user={user} key={i} loggedIn={true} />
                    }
                    else if (e.uid == "wv7fwmqvtITT5K2UwC8FPp1ckgG2") {
                        return <Chat data={e} user={user} key={i} admin={true} />
                    }
                    else {
                        return <Chat data={e} user={user} key={i} loggedIn={false} />
                    }

                })
            }
        </div>
    )
}
