import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Layout from "../../../components/layout/main/layout";
import styles from "../../../styles/pages/vacinationCalendarPage/vacinationCalendar.module.css";

const mockVacinations = [
  createData("vacination1", "2020-01-10"),
  createData("vacination2", "2020-01-09"),
  createData("vacination3", "2020-01-08"),
  createData("vacination4", "2020-01-07"),
  createData("vacination5", "2020-01-06"),
  createData("vacination6", "2020-01-05"),
  createData("vacination7", "2020-01-04"),
  createData("vacination8", "2020-01-03"),
  createData("vacination9", "2020-01-02"),
  createData("vacination10", "2020-01-01"),
];

function createData(name, date) {
  return { name, date };
}

export default function VacinationCalendar() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 7;

  const handleChangePage = (event, newPage) => {
    if (!mockVacinations || mockVacinations.length < newPage * itemsPerPage)
      return;

    setPage(newPage);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Skiepai
        </Typography>
        <Paper variant="outlined" className={styles.vacinationTableContainer}>
          <VacinationTable
            vacinations={mockVacinations}
            page={page}
            itemsPerPage={itemsPerPage}
          />
          <TablePagination
            component="div"
            count={mockVacinations.length}
            page={page}
            rowsPerPage={itemsPerPage}
            rowsPerPageOptions={[]}
            onPageChange={handleChangePage}
          />
        </Paper>
      </div>
    </Layout>
  );
}

function VacinationTable({ vacinations, page, itemsPerPage }) {
  return (
    <TableContainer>
      <Table>
        <VacinationTableHead />
        <VacinationTableBody
          vacinations={vacinations}
          page={page}
          itemsPerPage={itemsPerPage}
        />
      </Table>
    </TableContainer>
  );
}

function VacinationTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography>Pavadinimas</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography>Data</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

function VacinationTableBody({ vacinations, page, itemsPerPage }) {
  return (
    <TableBody>
      {vacinations &&
        vacinations
          .sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
          .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
          .map((vacination, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="body2">{vacination.name}</Typography>
              </TableCell>
              <TableCell align="right">{vacination.date}</TableCell>
            </TableRow>
          ))}
    </TableBody>
  );
}
