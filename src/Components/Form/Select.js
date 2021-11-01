import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import data from '../../_helpers/Data/directions.json';

export default function Select(props){

  const {label, setDist} = props;
  const setValue = (e,value)=>{
    setDist(value);
  }
  return(
    <Autocomplete
    onChange={setValue}
    options={data.items}
    getOptionLabel={(option) => option.name}
    renderInput={(params) => <TextField {...params} label={label} />}
    />

  )
}
