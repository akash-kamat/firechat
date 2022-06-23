import React from 'react'
import { ref, onValue, query, orderByChild } from "firebase/database";
import { useState, useEffect } from 'react'
import Chat from './Chat';
import './css/ChatList.css'
import Loading from './Loading';

export default function ChatList({ db, user, loading, setLoading }) {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        setLoading(true)
        onValue(ref(db, "messages/"), (snapshot) => {
            const data = [];
            snapshot.forEach(e => {
                data.push(e.val())
            })
            setChats(data)
            setLoading(false)


        })
    }, [])
    if (loading) {
        return (
            <div className='all-chats' id='allChats'>
                <Loading direction={"left"} />
                <Loading direction={"left"} />
                <Loading direction={"right"} />

            </div>
        )
    }
    else {
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
}
