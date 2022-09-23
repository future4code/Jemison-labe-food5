import styled from "styled-components";

export const ImagemLogo = styled.img`
width: 104px;
height: 58px;
object-fit: contain;
`

export const TituloEntrar = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 42px;
padding: 12px 32px;
`

export const LoginPageContainer = styled.div`
width: 68vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const FormContainer = styled.div`
width: 40vw;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const DivEntrar = styled.div`
width: 328px;
height: 42px;
padding: 12px 16px;
border-radius: 2px;
background-color: var(--mid-green);
`
export const BotaoEntrar = styled.button`
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: var(--black);
`

export const InputEmail = styled.input`
width: 100%;
height: 45px;
margin: 8px 0 0;
padding: 19px 48px 19px 16px;
border-radius: 2px;
border: solid 1px var(--greyish);
`

export const InputSenha = styled.input`
width: 100%;
height: 45px;
margin: 8px 0 0;
padding: 16px;
border-radius: 2px;
border: solid 1px var(--greyish);
`