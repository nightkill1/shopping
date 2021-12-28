import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { slideItems } from "../data"
import { mobile } from '../responsive'



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #8484f4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: ${props => props.direction === "right" && "10px"};
    left: ${props => props.direction === "left" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 999;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX( ${props => props.slideIndex * -100}vw)
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
    
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    
`

const Image = styled.img`
   
    height: 85%;
    
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`


const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else if (direction === "right") {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
        return slideIndex
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex} >
                {slideItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>View Now</Button>
                        </InfoContainer>
                    </Slide>
                )


                )}


            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </Arrow>
        </Container >
    )
}

export default Slider
