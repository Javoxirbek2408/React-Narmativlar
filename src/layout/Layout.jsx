import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { CardHome } from '../pages/home/CardHome'
import Home from '../pages/home/Home'

export const Layout = () => {
    return (
        <div>
            <Outlet />
            <Navbar />
            <CardHome />
        </div>
    )
}

