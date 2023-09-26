import React from 'react'
import style from '../style/phoneConfirm.module.css'
import { Link } from 'react-router-dom'

export default function CodeConfirmation() {
    return (
        <div className={style.PhoneConfirmContainer}>
            <Link exact='true' to='/get_username' className={style.BackButton}>
                <img src='/images/arrow.png' alt=''/>
            </Link>
            <div className='text-center'>
                <h1 style={{width: '100%', maxWidth: '200px', marginBottom: '1em'}}>
                    Enter the code we just texted you 
                </h1>
                <input type='text' style={{width: '100%', border: 'none', textAlign: 'center', outline: 'none'}}/>
                <p className='mt-2'>
                    Didn't receive it? <span>Tap to resent.</span>
                </p>
            </div>
            <Link exact='true' to='/allow_notification' className='primaryBtn d-flex align-items-center'>
                Next <img src='/images/nextArrowIcon.svg' className='ms-1' alt=''/>
            </Link>
        </div>
    )
}
