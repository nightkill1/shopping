import React from 'react'
import styped from 'styled-components'

const Container = styped.div`
    width: 100vw;
    height: 100vh;
    background: no-repeat
        linear-gradient(
            rgba(255,255,255, 0.5),
            rgba(255,255,255, 0.5)    
        ), 
        url("https://cdn5.f-cdn.com/contestentries/1578585/21468461/5d62b49ac544b_thumb900.jpg") center ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center; 
`
const Wrapper = styped.div`
    width: 40%;
    padding: 20px;
    background-color: white;

    
`
const Form = styped.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styped.h1``
const Agreement = styped.span`
font-size: 12px;
margin: 20px 0px;
`
const Input = styped.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styped.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer
`
function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder='Name'></Input>
                    <Input placeholder='Last name'></Input>
                    <Input placeholder='Username'></Input>
                    <Input placeholder='Email'></Input>
                    <Input placeholder='Password'></Input>
                    <Input placeholder='Confirm password'></Input>
                    <Agreement>
                        By creating an account, i consent to the processing of my pesonal data in accordance with by the
                        <b> PRIVACY POLICY</b>
                    </Agreement>
                    <Button>
                        Create
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
