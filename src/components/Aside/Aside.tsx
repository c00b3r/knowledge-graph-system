import React from 'react'
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import Questions from '../Questions/Questions'
import { Flex } from 'antd';

function Aside() {
    return (
    <>
        <div
        style={{
            width: "250px",
            height: "72px",
            backgroundColor: "#2E323A",
            padding: "16px 98px 16px 32px",
            borderBottom: "1px solid rgb(255, 255, 255, 6%)",
        }}
        >
        <img src="\src\components\test\Logotip_UrFU_Napisanie.png" />
        </div>
        <Flex>
            <NavigationMenu/>
            <Questions/>
        </Flex>
    </>
    )
}

export default Aside