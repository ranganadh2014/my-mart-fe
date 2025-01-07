import getOrders from "./actions/get-orders";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default async function Orders() {
    const ordersList = await getOrders();

    return (
        <>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Order ID</TableCell>
                    <TableCell align="left">Product Name</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Ordered At</TableCell>
                    <TableCell align="left">Payment Status</TableCell>
                    <TableCell align="left">Payment ID</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {ordersList.map((order) => (
                    <TableRow key={order.rpOrderId}>
                        <TableCell align="left">{order.rpOrderId}</TableCell>
                        <TableCell align="left">{order.product.name}</TableCell>
                        <TableCell align="right">{order.amount}</TableCell>
                        <TableCell align="left">{order.createdAt}</TableCell>
                        <TableCell align="left">{!!order.rpPaymentId ? "Received": "Pending"}</TableCell>
                        <TableCell align="left">{order.rpPaymentId}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    );
}