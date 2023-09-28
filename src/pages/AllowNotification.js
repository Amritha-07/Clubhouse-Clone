import React from 'react'
import style from '../style/phoneConfirm.module.css'
import { Link } from 'react-router-dom'

export default function AllowNotification() {
    return (
        <div className={style.PhoneConfirmContainer}>
            <div className='text-center'>
                <h1 className='mb-4'>
                    Last, important step!
                </h1>
                <h1 className='mb-3'>
                    Enable notifications to know when people are talking
                </h1>
                <div className={style.NotificationContainer}>
                    <div className='p-3'>
                        <h3>CLubhouse Would Like To Send You Notifications</h3>
                        <p>Notifications may include alerts, sounds and icon badges</p>
                    </div>
                    <div className={style.ActionButton}>
                        <Link exact='true' to='/home'>Don't Allow</Link>
                        <Link exact='true' to='/home'>Allow</Link>
                        <img src='/images/handIcon.svg' className={style.HandIcon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
