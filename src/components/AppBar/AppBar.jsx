import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import Box from 'components/Box';

function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      as={'header'}
      m={16}
      justifyContent="space-between"
      borderBottom="2px solid rgb(0 153 230 / 75%)"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
}

export default AppBar;
