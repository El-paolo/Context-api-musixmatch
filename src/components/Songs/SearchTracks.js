import React from 'react';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchTracks = ({ validateQtrack }) => (

  <Paper className='paper defaultPaper' >

    <TextField
      id='q_track'
      label='Track'
      margin='normal'
      variant='outlined'
      onKeyPress={ e => validateQtrack(e) }

    />

    <IconButton onClick={(e) => validateQtrack(e)} >
      <Search  />
    </IconButton>

  </Paper>


);

export default SearchTracks;