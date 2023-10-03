import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function AppLayout({children}) {
    return (
        <div className='AppLayout'>
            {children}
        </div>
    )
}
