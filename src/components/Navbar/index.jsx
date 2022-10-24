import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({ pokemonFilter, onChangeGenerations }) {
  function handleClick(generation){
    onChangeGenerations(generation);
  }

  return (
    <Box sx={{ display: 'flex', marginBottom: 2 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Pokedex
          </Typography>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <Button size="small" onClick={()=> handleClick(1)} variant="contained">Gen1</Button>
              <Button size="small" onClick={()=> handleClick(2)} variant="contained">Gen2</Button>
              <Button size="small" onClick={()=> handleClick(3)} variant="contained">Gen3</Button>
              <Button size="small" onClick={()=> handleClick(4)} variant="contained">Gen4</Button>
              <Button size="small" onClick={()=> handleClick(5)} variant="contained">Gen5</Button>
              <Button size="small" onClick={()=> handleClick(6)} variant="contained">Gen6</Button>
              <Button size="small" onClick={()=> handleClick(7)} variant="contained">Gen7</Button>
              <Button size="small" onClick={()=> handleClick(8)} variant="contained">Gen8</Button>
          </Grid>
          <Search onChange={(e) => pokemonFilter(e.target.value)}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
