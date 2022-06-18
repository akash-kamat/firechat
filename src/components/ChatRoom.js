import React from 'react'
import ChatList from './ChatList';
import { ref, set, push } from "firebase/database";
import './css/ChatRoom.css'
import { useEffect, useState } from 'react';
export default function ChatRoom({ database, user }) {
    const [input, setInput] = useState("");
    // useEffect(() => {
    //     // const input = document.getElementById("msgBox")
    //     input.addEventListener("keypress", function (event) {
    //         if (event.key === "Enter") {
    //             writeUserData();
    //         }
    //     });
    // }, [])
    function writeUserData() {
        // const input = document.getElementById("msgBox")
        const elem = document.getElementById("allChats")
        if (input == "") {
            elem.scrollTop = elem.scrollHeight;
        }
        else {
            const chatListRef = ref(database, 'messages');
            const newChatRef = push(chatListRef);
            set(newChatRef, {
                uid: user.uid,
                email: user.email,
                dp: user.photoURL,
                time: Date.now(),
                msg: input
            });
            setInput("")
            elem.scrollTop = elem.scrollHeight;

        }

    }
    function enterUserData(e) {
        if (e.keyCode == 13) {
            writeUserData();
        }
    }
    return (
        <div className='chatroom'>
            <ChatList db={database} user={user} />
            <div className='form'>
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => { enterUserData(e) }} placeholder='type a message ...' id='msgBox' type="text" />
                <button className='send-btn' onClick={writeUserData}>⇨</button>
            </div>
        </div>
    )
}
