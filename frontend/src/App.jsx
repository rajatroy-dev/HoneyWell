import './App.css';
import Home from './pages/home/Home';
import { Box, Divider, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/home/components/MovieDetails';
import Seats from './pages/select-seat/Seats';

function App() {
  return (
    <Box>
      <Typography variant="h2" p={2}>
        Book A Movie
      </Typography>
      <Divider sx={{ mb: 5 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/seats/:id" element={<Seats />} />
      </Routes>
    </Box>
  );
}

export default App;
