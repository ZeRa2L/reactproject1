import { ArrowBack, ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(0vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
height: 100%;
flex: 1;
`;

const Image = styled.div`
height: 80%;
`;

const InfoContainer = styled.div`
padding: 50px;
flex: 1;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {

const [slideIndex, setSlideIndex] = useState(0);
const handleClick = (direction) => {};

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="https://i.ibb.co/XsdmR2c/1.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quibusdam!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg="fcf1ed">
                <ImgContainer>
                    <Image src="https://i.ibb.co/XsdmR2c/1.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALE</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quibusdam!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg="fbf0f4">
                <ImgContainer>
                    <Image src="https://i.ibb.co/XsdmR2c/1.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>POPULAR SALE</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quibusdam!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider

