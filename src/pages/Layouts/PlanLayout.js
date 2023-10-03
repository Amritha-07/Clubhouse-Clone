import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function PlanLayout({children}) {
    return (
        <div style={{width: '100%', maxWidth: '500px', margin: 'auto'}}>
            {children}
        </div>
    )
}

export default PlanLayout
