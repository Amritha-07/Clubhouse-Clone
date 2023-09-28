import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/header.module.css'

export default function Header() {
    return (
        <div className={style.Header}>
            <Link exact='true' to='/explore'>
                <img src='/images/search.png' alt='' />
            </Link>
            <div className={style.NavItems}>
                <Link exact='true' to='/friends_invite'>
                    <img src='/images/invite.png' alt=''/>
                </Link>
                <Link exact='true' to='/upcoming'>
                    <img src='/images/calendar.png' alt=''/>
                </Link>
                <Link exact='true' to='/activity'>
                    <img src='/images/noti.png' alt=''/>
                </Link>
                <Link exact='true' to='/profile'>
                    <img src='/images/b1.png' alt=''/>
                </Link>
            </div>
        </div>
    )
}
