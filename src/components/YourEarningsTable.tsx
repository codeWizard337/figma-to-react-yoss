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

const createData = (name: string, amount: string, date: string, time: string) => {
    return { name, amount, date, time };
}

const rows = [
    createData('Client 1', "USD $45.00", "22/8", "9:00 AM to 11:00 AM"),
    createData('Client 1', "USD $45.00", "22/8", "9:00 AM to 11:00 AM"),
    createData('Client 1', "USD $45.00", "22/8", "9:00 AM to 11:00 AM"),
    createData('Client 1', "USD $45.00", "22/8", "9:00 AM to 11:00 AM"),
    createData('Client 1', "USD $45.00", "22/8", "9:00 AM to 11:00 AM"),
    createData('Client 1', "USD $45.00", "22/8", "9:00 AM to 11:00 AM"),
];

const YourEarningsTable = () => {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
                    <TableRow className='border-t'>
                        <TableCell>
                            <div className='text-[12px]'>
                                Client
                            </div>
                        </TableCell>
                        <TableCell align="left"><p className='text-[12px]'>Amount</p></TableCell>
                        <TableCell align="left"><p className='text-[12px]'>Date & Time</p></TableCell>
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
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                {row.amount}
                            </TableCell>
                            <TableCell align="left">
                                <div className='flex flex-col gap-1'>
                                    <p>{row.date}</p>
                                    <p>{row.time}</p>
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
export default YourEarningsTable