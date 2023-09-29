import React from 'react'
import style from '../style/explore.module.css'
import { NavLink } from 'react-router-dom'

export default function Subheader({pageTitle}) {
  return (
    <div className={style.Head}>
        <NavLink to='/home'><img src='/images/arrow.png' alt=''/></NavLink>
        <h3>{pageTitle}</h3>
    </div>
  );
}
