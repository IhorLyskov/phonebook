import { useDispatch } from 'react-redux';
import { LogBox, LogText } from './UserMenu.styled';
import { ButtonStyled } from '../Elements/Elements.styled';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <LogBox>
      <LogText>Hello, {user.name}!</LogText>
      <ButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonStyled>
    </LogBox>
  );
}

export default UserMenu;
