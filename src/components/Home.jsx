import "./Home.css"
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from'axios';

const Home = () => {
    const[value,setValue]=useState([])
    useEffect(()=>{
axios.get('https://dummyjson.com/users').then((response)=>{
    console.log(response.data.users);
    setValue(response.data.users);
});
    },[])
  return (
    <div classname="tablediv"><br></br>
    <Table classname='Table'>
            <TableHead classname="TableHead">
                <TableRow classname="TableRow">
                    <TableCell>Firstname</TableCell>             
                    <TableCell>Lastname</TableCell>  
                    <TableCell>Age</TableCell>    
                </TableRow>
            </TableHead>
            <TableBody>
              {value.map((data,ind)=>{
                return<TableRow>
                    <TableCell>{data.firstName}</TableCell>
                    <TableCell>{data.lastName}</TableCell>
                    <TableCell>{data.age}</TableCell>
                    
                   
                   
                </TableRow>
              })}
              
            </TableBody>
        </Table>
    </div>
  )
            }

export default Home
