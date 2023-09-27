import React from 'react'
import style from '../../style/bottomSheet.module.css'
import { FcGlobe, RcGlobe } from 'react-icons/fc'
import { useState } from 'react'

export default function StartRoom(props) {
    const [room, setRoom] = useState('open')

    return (
        <>
            <div className={style.SwitchLine}></div>
            <div className='text-end'>
                <button className={style.AddTopicButton}>
                    + Add a topic
                </button>
            </div>
            <div className={style.SelectRoom}>
                <button 
                    className={room == 'open' ? style.Active : ''} 
                    onClick={() => setRoom('open')}
                >
                    <div>
                        <FcGlobe />
                    </div>
                    Open
                </button>
                <button
                    className={room == 'social' ? style.Active : ''}
                    onClick={() => setRoom('social')}
                >
                    <div>
                        <FcGlobe />
                    </div>
                    Social
                </button>
                <button
                    className={room == 'closed' ? style.Active : ''}
                    onClick={() => setRoom('closed')}
                >
                    <div>
                        <FcGlobe />
                    </div>
                    Closed
                </button>
            </div>
            <p>Start a Room <span>{
                room == 'closed' 
                ? 'for people I choose' 
                : room == 'social' 
                ? 'with people I follow' 
                : 'open to everyone'
            }</span></p>
            <div className='text-center'>
                <button 
                    className={style.LetGoButton} 
                    onClick={() => {
                        props.setSheetCreateRoom(true);
                        props.setSheetVisible(true);
                    }}
                >
                    🎉Let's Go
                </button>
            </div>
        </>
    )
}
