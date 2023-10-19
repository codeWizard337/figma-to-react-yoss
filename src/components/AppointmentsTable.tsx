import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const statusStyle: { [key: string]: string } = {
    pending: 'border-purple-300 bg-purple-100 text-purple-800',
    completed: 'border-green-300 bg-green-100 text-green-800',
    canceled: 'border-red-300 bg-red-100 text-red-800'
}

const createData = (name: string, gender: string, time: string, status: string) => {
    return { name, gender, time, status };
}

const rows = [
    createData('Catalina', "Female", "12:00 AM", "Pending"),
    createData('John', "Male", "12:00 AM", "Completed"),
    createData('Martin', "Male", "12:00 AM", "Canceled"),
    createData('Susan', "Female", "12:00 AM", "Pending"),
];

const AppointmentsTable = () => {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Gender</TableCell>
                        <TableCell align="left">Time</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.gender}</TableCell>
                            <TableCell align="left">{row.time}</TableCell>
                            <TableCell align="center">
                                <span className={`rounded-full border ${statusStyle[row.status.toLowerCase()]} px-4 font-semibold text-xs py-1 uppercase`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default AppointmentsTable