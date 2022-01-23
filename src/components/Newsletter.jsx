import { SendOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
height: 60vh;
display: flex;
background-color: #fcf5f5;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ width: "80%" })}
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
cursor: pointer;

&:hover {
    background-color: white;
    color: teal;
}
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>some description must be here</Desc>
            <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <SendOutlined/>
            </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
