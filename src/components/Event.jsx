import React, { useState } from 'react';
import {Select} from '@mui/material'
import {MenuItem} from '@mui/material'
import {FormControl} from '@mui/material';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540

const Event = () => {
  const [val,setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };


  

  // moves the menu below the select input


  return (
    <FormControl>
      <Select
        id='Event-Type'
        name='Event'
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>All Category</MenuItem>
        <MenuItem value={1}>Event Type</MenuItem>
        <MenuItem value={2}>Photoshop</MenuItem>
        <MenuItem value={3}>Framer</MenuItem>
      </Select>
    </FormControl>
  );
};


export default Event;