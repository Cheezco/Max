import Layout from "../../../components/layout/main/Layout";
import { useRouter } from "next/router";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import styles from "../../../styles/pages/certificatePage/certificate.module.css";
import { useState } from "react";

const columns = [
  { id: "sending_Name", label: "sending_Name", minWidth: 170 },
  { id: "issue_date", label: "Issue_Date", minWidth: 100 },
];

function createData(sending_Name, issue_date) {
  return { sending_Name, issue_date };
}

const rows = [
  createData("Siuntimas", "2022-02-02"),
  createData("Siuntimas1", "2022-02-02"),
  createData("Siuntimas2", "2022-02-04"),
  createData("Siuntimas3", "2022-02-05"),
  createData("Siuntimas1", "2022-02-1"),
  createData("Siuntimas2", "2022-02-2"),
  createData("Siuntimas3", "2022-02-1"),
  createData("Siuntimas1", "2022-02-3"),
  createData("Siuntimas23", "2022-02-5"),
  createData("Siuntimas1", "2022-02-6"),
  createData("Siuntimas2", "2022-02-15"),
  createData("Siuntimas2", "2022-02-9"),
  createData("Siuntimas2", "2022-02-6"),
  createData("Siuntimas3", "2022-02-3"),
  createData("Siuntimas3", "2022-02-25"),
  createData("Siuntimas3", "2022-02-22"),
  createData("Siuntimas3", "2022-02-24"),
  createData("Siuntimas1", "2022-02-5"),
  createData("Siuntimas2", "2022-02-1"),
  createData("Siuntimas3", "2022-02-2"),
  createData("Siuntimas1", "2022-02-02"),
  createData("Siuntimas2", "2022-02-02"),
  createData("Siuntimas3", "2022-02-02"),
  createData("Siuntimas1", "2022-02-02"),
  createData("Siuntimas2", "2022-02-02"),
  createData("Siuntimas3", "2022-02-02"),
];

export default function Consultations() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
        <h1>Siuntimai</h1>
        <p>
          Šiame puslapyje pateikiama informacija apie visus klientui
          priklausančius siuntimus
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
            rowsPerPageOptions={[5, 10, 25, 100]}
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
