import React from 'react'
import Header from '../Header/Header'
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import Questions from '../Questions/Questions'

function Aside() {
    return (
    <>
        <Header/>
        <div style={{display:'flex'}}>
            <NavigationMenu/>
            <Questions/>
        </div>
    </>
    )
}

export default Aside