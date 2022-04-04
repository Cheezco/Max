import Layout from "../components/layout/main/Layout";
import { Box, TextField } from "@mui/material";
import styles from "../styles/pages/certificatePage/certificate.module.css";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";

const columns = [
  { id: "diagnosis_Name", label: "diagnosis_Name", minWidth: 170 },
  { id: "issue_date", label: "Issue_Date", minWidth: 100 },
];

function createData(diagnosis_Name, issue_date) {
  return { diagnosis_Name, issue_date };
}

const rows = [
  createData("Diagnozė", "2022-02-02"),
  createData("Diagnozė1", "2022-02-02"),
  createData("Diagnozė2", "2022-02-04"),
  createData("Diagnozė3", "2022-02-05"),
  createData("Diagnozė1", "2022-02-1"),
  createData("Diagnozė2", "2022-02-2"),
  createData("Diagnozė3", "2022-02-1"),
  createData("Diagnozė1", "2022-02-3"),
  createData("Diagnozė23", "2022-02-5"),
  createData("Diagnozė1", "2022-02-6"),
  createData("Diagnozė2", "2022-02-15"),
  createData("Diagnozė2", "2022-02-9"),
  createData("Diagnozė2", "2022-02-6"),
  createData("Diagnozė3", "2022-02-3"),
  createData("Diagnozė3", "2022-02-25"),
  createData("Diagnozė3", "2022-02-22"),
  createData("Diagnozė3", "2022-02-24"),
  createData("Diagnozė1", "2022-02-5"),
  createData("Diagnozė2", "2022-02-1"),
  createData("Diagnozė3", "2022-02-2"),
  createData("Diagnozė1", "2022-02-02"),
  createData("Diagnozė2", "2022-02-02"),
  createData("Diagnozė3", "2022-02-02"),
  createData("Diagnozė1", "2022-02-02"),
  createData("Diagnozė2", "2022-02-02"),
  createData("Diagnozė3", "2022-02-02"),
];

export default function diagnosis() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Layout>
      <Box className={styles.colors}>
        <h1>Diagnozės</h1>
        <p>
          Šiame puslapyje pateikiama informacija apie visas klientui
          priklausančias diagnozes
        </p>
      </Box>
      <Box className={styles.table_center}>
        <Paper sx={{ width: "70%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Pavadinimas</TableCell>
                  <TableCell>Išdavimo data</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={"Eilučių skaičius:"}
          />
        </Paper>
      </Box>
    </Layout>
  );
}
