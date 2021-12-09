import { Info } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;

const INfo = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: coloumn;
align-items: center;
justify-content: center;
`;

const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`;

export const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <INfo>
                <Title>{item.title}</Title>
                <Button>SHOW NOW</Button>
            </INfo>
        </Container>
    )
}

export default CategoryItem
