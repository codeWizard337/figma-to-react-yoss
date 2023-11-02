import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const statusStyle: { [key: string]: string } = {
    paid: 'border-green-300 bg-green-100 text-green-800'
}

const createData = (invoice: string, amount: string, date: string, status: string) => {
    return { invoice, amount, date, status };
}

const rows = [
    createData("Payout - #7", "USD $ 300.99", "Aug 13, 2023", "Paid"),
    createData("Payout - #6", "USD $ 514.00", "Aug 6, 2023", "Paid"),
    createData("Payout - #5", "USD $ 199.00", "Jul 28, 2023", "Paid"),
    createData("Payout - #4", "USD $ 236.00", "Jul 21, 2023", "Paid"),
    createData("Payout - #3", "USD $ 364.00", "Jul 13, 2023", "Paid"),
    createData("Payout - #2", "USD $ 200.00", "Jul 8, 2023", "Paid"),
    createData("Payout - #001", "USD $ 116.00", "Jul 1, 2023", "Paid"),
];

const YourPayoutsTable = () => {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
                    <TableRow className='border-t'>
                        <TableCell style = {{ width: '600px'}}>
                            <p className='text-[12px]'>Invoice</p>
                        </TableCell>
                        <TableCell align="left"><p className='text-[12px]'>Amount</p></TableCell>
                        <TableCell align="left"><p className='text-[12px]'>Date</p></TableCell>
                        <TableCell align="left"><p className='text-[12px]'>Status</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.invoice}
                            </TableCell>
                            <TableCell align="left">{row.amount}</TableCell>
                            <TableCell align="left">
                                {row.date}
                            </TableCell>
                            <TableCell align="left">
                                <span className={`rounded-full border ${statusStyle[row.status.toLowerCase()]} px-4 font-semibold text-xs py-1`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default YourPayoutsTable