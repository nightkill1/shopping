import React from 'react'
import styled from 'styled-components'
// import "../css/announcement.css"
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`;
function Announcement() {
    return (
        <Container >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis est recusandae repudiandae tenetur itaque eaque quisquam? Cum quod sunt iure, voluptatem officia id eligendi temporibus, laudantium nisi eum sint?
        </Container>
    )
}

export default Announcement
