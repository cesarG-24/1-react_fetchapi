import styled from "styled-components";
import {NavLink} from "react-router-dom";

const LinkStyled = styled(NavLink)`
  background: none;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: right;
  color: #000000;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: #FF6464;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 16px;
  }
`


export const Link = (props) => {
    const {children, to = '/', ...rest} = props;

    return <LinkStyled to={to} {...rest}>{children}</LinkStyled>
}
