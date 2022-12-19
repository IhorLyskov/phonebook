import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
  padding: 10px 10px 10px 0;
  color: #000;
  font-size: 20px;
  text-decoration: none;
  font-weight: 700;

  &.active {
    color: rgb(0, 153, 230);
  }
  &:hover:not(.active) {
    color: rgb(0, 153, 230, 0.75);
  }
`;
