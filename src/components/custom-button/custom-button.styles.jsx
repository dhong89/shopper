import styled, { css } from 'styled-components';


const buttonStyle = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
export const invertedButtonStyle = css`
  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
  }
`

export const googleSignInStyle = css`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`

const getButtonStyle = props => {
    if (props.isGoogleSignIn){
       return googleSignInStyle
   }  

   return props.inverted ? invertedButtonStyle : buttonStyle
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

    ${getButtonStyle}
`