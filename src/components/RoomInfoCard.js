import React, {useState, useEffect} from 'react'
import style from '../style/roomCard.module.css'
import data from '../data/roomCard.json'
import {BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs'

export default function RoomInfoCard() {
    return (
        <>
            <h2>
                {data.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div className={style.RoomCardContainer}>
                                <h6>{item.title}</h6>
                                <h2>{item.sub_title}</h2>
                                <div className={style.RoomMembers}>
                                    <div>
                                        <img src='/images/user-img.jpg' alt='' />
                                        <img src='/images/user-img2.jpg' alt='' />
                                    </div>
                                    <div>
                                        {item.members.map((person, index) => (
                                            <p key={index}>
                                                {person.first_name} {person.last_name} <BsChatDots />
                                            </p>
                                        ))}
                                        <p className='d-flex align-items-center'>
                                            <span className='me-2'>1.8</span>
                                            <BsFillPersonFill />
                                            <span className='mx-2'></span>{" "}
                                            <span className='mr-2'>5</span> <BsChatDotsFill />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </h2>
        </>
    )
}
