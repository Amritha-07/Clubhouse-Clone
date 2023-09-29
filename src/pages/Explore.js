import React from 'react'
import style from '../style/explore.module.css'
import { Input } from 'antd'
import data from '../data/Explore.json'
import { DownOutlined, FireOutlined } from '@ant-design/icons'
import Subheader from '../components/Subheader'
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

export default function Explore() {
    const { people, conversation } = data

    return (
        <div className={style.ExploreContainer}>
            <div className={style.Header}>
                <Subheader pageTitle='Explore'/>
                <Input style={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '0.8em',
                    padding: '0.3em 1em',
                    border: 'none',
                    boxShadow: 'none',
                }}
                size='large'
                placeholder='Find People and Clubs'
                prefix={<img src='/images/search.png' alt='' width='15px'/>}></Input>
            </div>
            <h6>people to follow</h6>
            <div className={style.PeopleContainer}>
                {people.map((item, index) => (
                    <div key={index}>
                        <div className='d-flex align-items-center'>
                            <img src='/images/user-img.jpg' alt />
                            <div className='ms-2'>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                <button className={style.ShowMore}>
                    show more people <DownOutlined />
                </button>
            </div>
            <h6>find conversations about</h6>
            <div className='row mx-0'>
                {conversation.map((item, index) => (
                    <div className='col-6 px-2 mb-3'>
                        <div className={style.ConversationCard}>
                            <h6>
                                <FireOutlined />
                                {item.title}
                            </h6>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
