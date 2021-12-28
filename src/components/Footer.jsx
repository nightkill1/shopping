import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Mail, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
const Container = styled.div`
    display: flex;
    margin-top: 20px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-size: 30px;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    background-color: #${props => props.color};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const Center = styled.div`
    flex: 1;
`

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style-type: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
`

const Right = styled.div`
flex: 1;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shopping card</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, dicta obcaecati cumque fuga temporibus, dignissimos laborum saepe voluptatibus nihil id, accusantium soluta eligendi suscipit deleniti commodi provident ipsam eaque!</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Card</ListItem>
                    <ListItem>Iphone</ListItem>
                    <ListItem>SamSung</ListItem>
                    <ListItem>Ipad</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "20px" }} />
                    15 Nguyen Tri Phuong, Tan Uyen, Phu Chanh, Binh Duong
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "20px" }} />
                    +84 344 612 169
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "20px" }} />
                    hoang.nguyen@techupcorp.com
                </ContactItem>
                <Payment src="https://www.helpfulgames.com/about/wp-content/uploads/2021/06/Full_Online_Tray_RGB.png" />
            </Right>
        </Container>
    )
}

export default Footer
