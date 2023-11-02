import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (name: string, email: string, cost: string, address: string, postcode: string, date: string, time: string) => {
    return { name, email, cost, address, postcode, date, time };
}

const rows = [
    createData('Client 1', "email@gmail.com", "45.00 $", "8642 Yule Street, Arvada", "CO 80007", "22/8", "9:00 AM to 11:00 AM"),
    createData('Client 2', "email@gmail.com", "50.65 $", "8642 Yule Street, Arvada", "CO 80007", "22/8", "9:00 AM to 11:00 AM"),
    createData('Client 3', "email@gmail.com", "38.00 $", "8642 Yule Street, Arvada", "CO 80007", "22/8", "9:00 AM to 11:00 AM"),
    createData('Client 4', "email@gmail.com", "39.00 $", "8642 Yule Street, Arvada", "CO 80007", "22/8", "9:00 AM to 11:00 AM"),
];

const PendingVisitsTable = () => {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
                    <TableRow  className='border-t'>
                        <TableCell>
                            <div className='flex items-center text-[12px]'>
                                Client
                            </div>
                        </TableCell>
                        <TableCell align="left"><p className='text-[12px]'>Cost</p></TableCell>
                        <TableCell align="left"><p className='text-[12px]'>Address</p></TableCell>
                        <TableCell align="left"><p className='text-[12px]'>Date & Time</p></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>{row.name}</p>
                                    <p>{row.email}</p>
                                </div>
                            </TableCell>
                            <TableCell align="left">{row.cost}</TableCell>
                            <TableCell align="left">
                                <div className='flex flex-col gap-1'>
                                    <p>{row.address}</p>
                                    <p>{row.postcode}</p>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <div className='flex flex-col gap-1'>
                                    <p>{row.date}</p>
                                    <p>{row.time}</p>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div className='flex flex-row gap-1 items-center'>
                                    <button className='h-11 w-11'>
                                        <svg width={20} height={20}><use href='#svg-check-circle' /></svg>
                                    </button>
                                    <button className='h-11 w-11'>
                                        <svg width={20} height={20}><use href='#svg-x-circle' /></svg>
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={5}>
                            <div className='flex w-full px-2 justify-between items-center'>
                                <button className='px-3.5 py-2 rounded-lg border h-[36px] text-[14px] font-semibold'>Previous</button>
                                <div className='font-semibold'>Page 1 of 10</div>
                                <button className='px-3.5 py-2 rounded-lg border h-[36px] text-[14px] font-semibold'>Next</button>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default PendingVisitsTable