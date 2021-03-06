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
                    <Desc><p>iPhone 11 Pro 64GB c?? c?? thi???t k??? cao c???p sang tr???ng, ??i k??m v???i ???? l?? vi x??? l?? A13 Bionic m???nh m??? c??ng h??? th???ng ba camera sau 12MP h???a h???n s??? mang l???i cho ng?????i d??ng nh???ng tr???i nghi???m v?? c??ng m?????t m??.</p>
                        <br />
                        <p>iPhone 11 Pro 64GB c?? ch??nh h??ng l?? b???n qu???c t??? b??? sim v??o l?? d??ng ???????c ngay. M??y ???????c Di ?????ng Vi???t b??n ra v???i m???c gi?? ??u ????i v?? b???o h??nh 06 th??ng, h??? tr??? 1 ?????i 1 v?? nhi???u ch????ng tr??nh kh??c.</p>
                        <br />
                        <p>iPhone 11 Pro 64GB c?? tuy kh??ng ph???i l?? m???t th??? h??? iPhone v???i thi???t k??? m???i ho??n to??n, nh??ng l???i l?? th??? h??? iPhone mang trong m??nh nhi???u thay ?????i nh???t v??? m???t t??nh n??ng, c??ng nh?? ph???n ngo???i h??nh. N???u nh?? nh??n ??? m???t tr?????c, b???n kh?? c?? th??? nh???n ra s??? kh??c bi???t.
                        </p>
                        <br />
                        <p> Nh??ng s??? th???t l?? Apple ???? thay ?????i l???p k??nh c?????ng l???c tr??n iPhone 11 Pro c?? b???ng c??ch ph??? th??m 1 l???p ion ch???ng tr???y nh???m gi??p cho m???t k??nh ch???ng l???i c??c t??c nh??n v???t l?? g??y tr???y x?????c b??n ngo??i, v?? ?????ng th???i c??ng gi??p cho b??? m???t iPhone 11 Pro 64GB m?????t m?? h??n, tho???i m??i h??n cho ng?????i d??ng.</p>
                    </Desc>

                    <Price>12.000.000VN??</Price>
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
