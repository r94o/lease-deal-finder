import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBox() {


  const handleChange = (event) => {
    setCar(cars[event.target.value])
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Car</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car}
          label="Car"
          onChange={handleChange}
        >
        {cars.map(({ make, model }, index) => {
          return <MenuItem value={index}>{`${make} ${model}`}</MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
  )

}