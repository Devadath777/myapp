import { Button, Stack, TextField} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from'axios';
const Ademp = () => {
  const {register,handleSubmit}=useForm();
  const getVal=(val)=>{
  
    alert('Form submitted');
    axios.post('https://reqres.in/api/users',val).then((res)=>{
      alert(`the data is posted with id ${res.data.id}`);

    })

  }
  return (
    <div>
      <Stack
      marginLeft={'auto'}
      marginRight={'auto'}
      marginTop={30}
      component="form"
        
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="employee name"
        variant="filled"
        size="small"
      />
      <TextField
      name='emplocation'
      {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="employee location"
        variant="filled"
        />

        <TextField
        name='empdesignation'
        {...register('empdesignation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="emplopyee description"
        variant="filled"
      />
      <Button variant='contained'onClick={handleSubmit(getVal)}>sumbit</Button>
    </Stack>
    </div>
  )
}

export default Ademp

