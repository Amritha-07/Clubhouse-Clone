import React from 'react'
import style from '../style/explore.module.css'
import data from '../data/Explore.json'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

export default function Explore() {
    const { people, conversation } = data

    return (
        <div className={style.ExploreContainer}>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.PeopleContainer}>
                {people.map((item, index) => (
                    <div key={index}>
                        <div className='d-flex align-items-center'>
                            <img src='/images/user-img.jpg' alt />
                            <div className='ms-2'>
                                <h5>{item.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
