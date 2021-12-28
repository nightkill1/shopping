import React from 'react'
import { Send } from '@material-ui/icons'
import styled from 'styled-components'
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
`
const Desc = styled.div`
text-align: center;
    width: 70%;
    margin: 0px auto;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

`
const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;

`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`
const Newsletter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, atque reiciendis aliquid maiores nesciunt ut esse pariatur natus, debitis suscipit illum qui molestias, quidem ipsa aspernatur cumque exercitationem quasi unde.</Desc>
            <InputContainer>
                <Input placeholder='Your email' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>

        </Container>
    )
}

export default Newsletter
