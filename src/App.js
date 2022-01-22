import './App.css';
import Light from './components/Light';
import Container from './components/Container';
import Box from '@mui/material/Box';
// import LightNew from './components/LightNew';

function App() {
  return (
  <Container>
  <Box sx={{display:'grid', gap:1, gridTemplateColumns:'repeat(2, 1fr)'}}>
    <Light />
    <Light />
  </Box>
  </Container>
  );
}

export default App;