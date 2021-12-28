import { Remove, Add } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

`
const ImgContainer = styled.div`
flex: 1;

`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 200;
`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
    font-size: 30px
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FiterTitle = styled.span`
    font-size: 20px;

`
const FiterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 5px;
    border: 1px solid  ${props => props.color};
    &:hover{
        border: 1px solid green ;
    }
`
const FiterRam = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FiterRamOption = styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    &:hover{
        color: white;
        border: 1px solid white;
        background-color: teal;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <ImgContainer>
                    <Image src="https://lh3.googleusercontent.com/proxy/jIy4EFGlnjvdSvIBeLQ2NysU2-DI7kKPtCYd9PsJJ0oGDBs1CcMDYqsOf5mRDvVyffepExTKKtYb-rixchZB7CXvIi8jBrIHywdpGLiWkTLNxfTTW-lfQekuzB-DDJ5zqArlNL0tan0ogJX-vC4b-bQ" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Iphone 11 Pro Max</Title>
                    <Desc><p>iPhone 11 Pro 64GB cũ có thiết kế cao cấp sang trọng, đi kèm với đó là vi xử lý A13 Bionic mạnh mẽ cùng hệ thống ba camera sau 12MP hứa hẹn sẽ mang lại cho người dùng những trải nghiệm vô cùng mượt mà.</p>
                        <br />
                        <p>iPhone 11 Pro 64GB cũ chính hãng là bản quốc tế bỏ sim vào là dùng được ngay. Máy được Di Động Việt bán ra với mức giá ưu đãi và bảo hành 06 tháng, hỗ trợ 1 đổi 1 và nhiều chương trình khác.</p>
                        <br />
                        <p>iPhone 11 Pro 64GB cũ tuy không phải là một thế hệ iPhone với thiết kế mới hoàn toàn, nhưng lại là thế hệ iPhone mang trong mình nhiều thay đổi nhất về mặt tính năng, cũng như phần ngoại hình. Nếu như nhìn ở mặt trước, bạn khó có thể nhận ra sự khác biệt.
                        </p>
                        <br />
                        <p> Nhưng sự thật là Apple đã thay đổi lớp kính cường lực trên iPhone 11 Pro cũ bằng cách phủ thêm 1 lớp ion chống trầy nhằm giúp cho mặt kính chống lại các tác nhân vật lý gây trầy xước bên ngoài, và đồng thời cũng giúp cho bề mặt iPhone 11 Pro 64GB mượt mà hơn, thoải mái hơn cho người dùng.</p>
                    </Desc>

                    <Price>12.000.000VNĐ</Price>
                    <FilterContainer>
                        <Filter>
                            <FiterTitle>Color</FiterTitle>
                            <FiterColor color="red" />
                            <FiterColor color="gold" />
                            <FiterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FiterTitle>Ram</FiterTitle>
                            <FiterRam>

                                <FiterRamOption>4gb</FiterRamOption>
                                <FiterRamOption>8gb</FiterRamOption>
                                <FiterRamOption>16gb</FiterRamOption>
                            </FiterRam>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button> ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
