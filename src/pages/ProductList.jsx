import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;

    margin-right: 20px;
`
const Option = styled.option``
// const FilterText = styled.div``
const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`
const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select >
                        <Option disabled selected> Type</Option>
                        <Option>XS</Option>
                        <Option>XS MAX</Option>
                        <Option>11</Option>
                        <Option>11 Pro</Option>
                        <Option>11 Pro Max</Option>
                        <Option>12</Option>
                        <Option>12 Pro</Option>
                        <Option>12 Pro Max</Option>
                    </Select>
                    <Select >
                        <Option disabled selected> Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>

                    </Select>
                </Filter>
                <Filter><FilterText>Sorf Products:</FilterText>
                    <Select >
                        <Option selected> Newest</Option>
                        <Option>Price (asc) </Option>
                        <Option>Price (desc) </Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
