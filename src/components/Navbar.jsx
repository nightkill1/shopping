import React from 'react'
// import styled from 'styled-components'
import '../css/navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import { Badge, Input } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from "../responsive"
import styled from 'styled-components';



function Navbar() {
    return (
        <div className='container'>
            <div className='left' >
                <div className='language'>
                    EN
                </div>
                <div className='searchContainer'>
                    <div className="input">
                        <Input style={{ borderRadius: "20px" }} />
                    </div>
                    <SearchIcon />
                </div>
            </div>
            <div className='center'>
                <div className="logo">
                    Shopping card
                </div>
            </div>
            <div className='right'>
                <div className='menuItem'>
                    register

                </div>
                <div className='menuItem'>
                    login

                </div>
                <div className='menuItem'>
                    <Badge badgeContent={4} color="primary" >
                        <ShoppingCartOutlined ></ShoppingCartOutlined>
                    </Badge>


                </div>
            </div>
        </div>
    )
}

export default Navbar
