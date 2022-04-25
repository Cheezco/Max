import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from "../components/layout/main/Layout";
import { Box, Divider } from "@mui/material";
import styles from "../styles/pages/particularVacine/particularVacine.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, text) {
  return { name, text };
}

const rows = [
  createData('Skiepo pavadinimas', 'Pavadinimas'),
  createData('Pasiskiepijimo data: ', '1969-04-20'),
  createData('Galioja iki:', '2069-04-20'),
  createData('Aprašymas', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions ofLorem Ipsum.'),
];

export default function CustomizedTables() {
  return (
    <Layout>
            <div className={styles.padding}>
                <Box className={styles.container}>
                    <p className={styles.bigText}>Vakcinos išsami informacija</p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell sx={{ minWidth: 169 }}  component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.text}
                                    </StyledTableCell>
                                </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>      
        </Layout>
  );
}