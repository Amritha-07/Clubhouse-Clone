import React, { useState} from 'react'
import style from '../../style/roomDetail.module.css'
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai'
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs'

export default function NewRoom(props) {
    const [micMuteVisible, setMicMuteVisible] = useState(true);
    const [itemsVisible, setItemsVisible] = useState(true);
    const card = props.cardDetail;

    return (
        <>
            <div className={style.RoomDetailContainer}>
                <div className={style.Head}>
                    <div className='d-flex align-items-center'>
                        <a 
                            href='#' 
                            onClick={() => {
                                props.setSheetVisible(false)
                            }}
                        >
                            <img src='/images/arrow.png' className={style.ArrowIcon} alt='' />
                        </a>
                        <span>Hallway</span>
                    </div>
                    <div>
                        <AiOutlineFile />
                        <img src='/images/user-img.jpg' className={style.ProfileImage} alt='' />
                    </div>
                </div>
                <div className={style.RoomDetailCard}>
                    <div className='d-flex align-items-center justify-content-between flex-wrap' style={{ padding: '0.5em 1em' }}>
                        {
                            card.members.map((item) => (
                                <div className={style.MemberContainer}>
                                    {
                                        micMuteVisible ?
                                        (
                                            <div className={style.AudioIcon}>
                                                <BsMicMuteFill />  
                                            </div>
                                        ) :
                                        (
                                            ''
                                        )
                                    }
                                    <img src='/images/user-img.jpg' alt='' />
                                    <p>
                                        <span></span>
                                        {item.first_name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
