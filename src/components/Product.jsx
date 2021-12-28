import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center; 
    transition: all 0.2s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height 350px;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: lightblue;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
   width: 250px;
   height: 250px;
   border-radius: 50%;
   background-color: white;
   position: absolute;

`

const Image = styled.img`
   height: 75%;
   z-index: 1;
`


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: white;
        transform: scale(1.1);

    }
`
const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Icon>
                <Icon>
                    <SearchOutlined ></SearchOutlined>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined></FavoriteBorderOutlined>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
