import { Email, Facebook, Instagram, LocationOn, Payment, Phone, Pinterest, Twitter } from '@material-ui/icons';
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1`
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Footer = () => {
    return <Container>
           <Left>
               <Logo>LAMA</Logo>
               <Desc>some description must be here for example i will say some words about spiderman he is very kind</Desc>
               <SocialContainer>
                   <SocialIcon color="3B5999">
                       <Facebook/>
                   </SocialIcon>
                   <SocialIcon color="E4405F">
                       <Twitter/>
                   </SocialIcon>
                   <SocialIcon color="55ACEE">
                       <Instagram/>
                   </SocialIcon>
                   <SocialIcon color="E60023">
                       <Pinterest/>
                   </SocialIcon>
               </SocialContainer>
            </Left> 
           <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Fashion</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Acount</ListItem>
                    <ListItem>Woman</ListItem>
                    <ListItem>Apple</ListItem>
                    <ListItem>Google</ListItem>
                    <ListItem>Room</ListItem>
                    <ListItem>Lion</ListItem>

                </List>
           </Center>
           <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}} /> 8 999 999 99 99
                </ContactItem>
                <ContactItem>
                    <LocationOn style={{marginRight:"10px"}} /> saint petesburg gatchina
                </ContactItem>
                <ContactItem>
                    <Email style={{marginRight:"10px"}} /> someone@gmail.com
                </ContactItem>
           </Right>
        </Container>;
};

export default Footer
