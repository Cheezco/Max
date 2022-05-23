import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../../../components/layout/main/Layout";
import { Box, Button } from "@mui/material";
import styles from "../../../styles/pages/consultationsDoctorPage/consultations.module.css";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Date, patient, Text) {
  return { Date, patient, Text };
}

const rows = [
  createData("0000-00-00", "Vardas pavarde", "Priežastis"),
  createData("0000-00-00", "Vardas pavarde", "Priežastis"),
  createData("0000-00-00", "Vardas pavarde", "Priežastis"),
  createData("0000-00-00", "Vardas pavarde", "Priežastis"),
  createData("0000-00-00", "Vardas pavarde", "Priežastis"),
  createData("0000-00-00", "Vardas pavarde", "Priežastis"),
  createData("0000-00-00", "Vardas pavarde", "Priežastis"),
  createData("0000-00-00", "Vardas pavarde", "Priežastis"),
];

export default function Consultations() {
  return (
    <Layout>
      <div className={styles.padding}>
        <Box className={styles.container}>
          <p className={styles.bigText}>Vizitai</p>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Data</StyledTableCell>
                  <StyledTableCell>Pacientas</StyledTableCell>
                  <StyledTableCell>Priežastis</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.Date}>
                    <StyledTableCell
                      sx={{ minWidth: 169 }}
                      component="th"
                      scope="row"
                    >
                      {row.Date}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.patient}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ minWidth: 400 }}
                      component="th"
                      scope="row"
                    >
                      {row.Text}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Button variant="contained" color="error">
                        Atšaukti vizitą
                      </Button>
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
