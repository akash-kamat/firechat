import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './css/Chat.css'
export default function Loading({ direction }) {
    if (direction == "left") {
        return (
            <div className='msg-block-loading'>
                <div className='chat-flex'>
                    <div className='dp-container'>
                        {<Skeleton className='left-dp' width={40} height={40} circle={true} />}
                    </div>
                    <div className='msg-container'>
                        <p className='message'>
                            {<Skeleton className='left-msg' width="170px" height={15} count={3} />}
                        </p>
                    </div>
                </div>
                <div className='date-time-container'>
                    <h9 className='msg-time'>
                        {<Skeleton className='left-date' width={100} height={10} />}
                    </h9>
                    <h10 className="msg-date">
                        {<Skeleton className='left-date' width={100} height={10} />}
                    </h10>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='msg-block-logged-loading'>
                <div className='chat-flex-logged'>
                    <div className='dp-container'>
                        {<Skeleton className='right-dp' width={40} height={40} circle={true} />}
                    </div>
                    <div className='msg-container'>
                        <p className='message'>
                            {<Skeleton className='right-msg' width="170px" height={15} count={3} />}
                        </p>
                    </div>
                </div>
                <div className='date-time-container-logged'>
                    <h9 className='msg-time'>
                        {<Skeleton className='right-date' width={100} height={10} />}
                    </h9>
                    <h10 className="msg-date">
                        {<Skeleton className='right-date' width={100} height={10} />}
                    </h10>
                </div>
            </div>
        )
    }
}
