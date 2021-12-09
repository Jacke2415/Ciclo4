import * as React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export const ShowUser = () => {
    const classes = useStyles();

    const [usersList, setuserList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users').then( (allUsers) => {
          setuserList(allUsers.data);
        })
      }, []);

    return (
        <>
        <h2>All Users</h2>
        <TableContainer component={Paper}>
        <Table className = {classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">No Identificación</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Apellido</TableCell>
                <TableCell align="center">Cargo</TableCell>
                <TableCell align="center">Salario</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {usersList.map((user, key) => (
                <TableRow key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {user.userName}
                </TableCell>
                <TableCell align="right">{user.regNo}</TableCell>
                <TableCell align="right">{user.grade}</TableCell>
                <TableCell align="right">{user.section}</TableCell>
                <TableCell align="right">
                    {/* <IconButton aria-label="delete" className={classes.margin} onClick = {() => deleteuser(user._id)}>
                    <DeleteIcon fontSize = "small"/>
                    </IconButton> */}
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </>
    )
}
