import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div`

`;
const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option`
padding: 10px;
`;

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>green</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>pink</Option>
                        <Option>white</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>xs</Option>
                        <Option>s</Option>
                        <Option>m</Option>
                        <Option>l</Option>
                        <Option>xl</Option>
                        <Option>xxl</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
