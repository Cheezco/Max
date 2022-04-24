import Layout from "../components/layout/main/Layout";
import { useRouter } from "next/router";
import {
  Box,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import styles from "../styles/pages/certificatePage/certificate.module.css";

import * as React from "react";

import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";

const columns = [
  { id: "diagnosis_Name", label: "diagnosis_Name", minWidth: 170 },
  { id: "issueDate", label: "issueDate", minWidth: 100 },
];

function createData(diagnosis_Name, issueDate) {
  return { diagnosis_Name, issueDate };
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

export default function Diagnosis() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const router = useRouter();
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
                        className="pointer"
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                        onClick={() => {
                          router.push("/particularDiagnosis");
                        }}
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
