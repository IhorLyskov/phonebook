import Box from 'components/Box';
import { FcCellPhone } from 'react-icons/fc';

function Home() {
  return (
    <Box flexDirection="column" gridGap={32}>
      <FcCellPhone size={150} />
      <h1>Create your phonebook</h1>
    </Box>
  );
}
export default Home;
