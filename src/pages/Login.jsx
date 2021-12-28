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
        url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpM722T0T1P4KeZconZY8NT-hoDGQqybYuA49fcGUQapNPqTjnYOH-qnrZavx5TgofbXg&usqp=CAU") center ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center; 
`
const Wrapper = styped.div`
    width: 20%;
    padding: 20px;
    background-color: white;

    
`
const Form = styped.form`
    display: flex;
    flex-direction: column;
  
`
const Title = styped.h1``

const Input = styped.input`
    flex: 1;
    min-width: 40%;
    margin: 0px 10px 20px 0px;
    padding: 10px;

`
const Button = styped.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styped.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cusor: pointer;
`
function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>
                    SIGN IN
                </Title>
                <Form>

                    <Input placeholder='Username'></Input>
                    {/* <Input placeholder='Email'></Input> */}
                    <Input placeholder='Password'></Input>

                    <Button>
                        Login
                    </Button>
                    <Link>
                        CREATE A NEW ACCOUNT
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}


export default Login
