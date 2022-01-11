import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from "styled-components"

const Container = styled.div`
 
`;
const Wrapper = styled.div`
 padding: 20px;
`;
const Title = styled.div`
 font-size: 30px;
 font-weight: 300;
 text-align: center;
`;
const Top = styled.h1`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
`;
const TopButton = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;
 border: ${(props) => props.type === "filled" && "none"};
 background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
 color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
 
`;
const TopText = styled.span`
 font-size: 20px;
 text-decoration: underline;
 cursor: pointer;
 margin: 0px 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const Info = styled.div`
 flex: 3;
`;
const Summary = styled.div`
 flex: 1;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTIUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>shopping bag(2)</TopText>
                        <TopText>your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Img src="#"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>Id:</b> 7675489456787654</ProductId>
                                    <ProductColor/>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail></PriceDetail>
                        </Product>
                    </Info>
                    <Summary>Summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
