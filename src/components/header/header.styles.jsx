import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//'css allows us to recycle css styles in multiple styled components. The same optioncontainerStyles is being used by the option link and option div components. 
const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

// (Link) allows styled components to style Links
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLInk = styled(Link)`
    ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`