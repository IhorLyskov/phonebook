import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.colorText};
  font-size: ${p => p.theme.fontSize[3]}px;
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeight.bold};

  &.active {
    color: ${p => p.theme.colors.colorAccent};
  }
  &:hover:not(.active) {
    color: ${p => p.theme.colors.colorKeyBg};
  }
`;
