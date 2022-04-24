import Layout from "../components/layout/main/Layout";
import styles from "../styles/pages/certificatePage/certificate.module.css";
import { useRouter } from "next/router";
import React from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  stepButtonClasses,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";

const columns = [
  { id: "certificate_Name", label: "Certificate_Name", minWidth: 170 },
  { id: "issue_date", label: "Issue_Date", minWidth: 100 },
];

function createData(certificate_Name, issue_date) {
  return { certificate_Name, issue_date };
}

const rows = [
  createData("Nedarbingumo pažymėjimas", "2022-02-02"),
  createData("Nedarbingumo pažymėjimas", "2022-02-02"),
  createData("Nedarbingumo pažymėjimas", "2022-02-04"),
  createData("Nedarbingumo pažymėjimas", "2022-02-05"),
  createData("Nedarbingumo pažymėjimas", "2022-02-1"),
  createData("Nedarbingumo pažymėjimas", "2022-02-2"),
  createData("Nedarbingumo pažymėjimas", "2022-02-1"),
  createData("Nedarbingumo pažymėjimas", "2022-02-3"),
  createData("Nedarbingumo pažymėjimas", "2022-02-5"),
  createData("Nedarbingumo pažymėjimas", "2022-02-6"),
  createData("Nedarbingumo pažymėjimas", "2022-02-15"),
  createData("Nedarbingumo pažymėjimas", "2022-02-9"),
  createData("Nedarbingumo pažymėjimas", "2022-02-6"),
  createData("Nedarbingumo pažymėjimas", "2022-02-3"),
  createData("Nedarbingumo pažymėjimas", "2022-02-25"),
  createData("Nedarbingumo pažymėjimas", "2022-02-22"),
  createData("Nedarbingumo pažymėjimas", "2022-02-24"),
  createData("Nedarbingumo pažymėjimas", "2022-02-5"),
  createData("Nedarbingumo pažymėjimas", "2022-02-1"),
  createData("Nedarbingumo pažymėjimas", "2022-02-2"),
  createData("Nedarbingumo pažymėjimas", "2022-02-02"),
  createData("Nedarbingumo pažymėjimas", "2022-02-02"),
  createData("Nedarbingumo pažymėjimas", "2022-02-02"),
  createData("Nedarbingumo pažymėjimas", "2022-02-02"),
  createData("Nedarbingumo pažymėjimas", "2022-02-02"),
  createData("Nedarbingumo pažymėjimas", "2022-02-02"),
];

export default function CertificatePage() {
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
        <h1>Pažymos</h1>
        <p>
          Šiame puslapyje pateikiama informacija apie visas klientui
          priklausančias pažymas
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
                        onClick={() => {
                          router.push("/particularCertificatePage");
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

      <Box className={styles.table_center}>
        <p>Paspaudus ant pažymos turi išmesti tokią lentelę</p>
        <CustomLink
          href="/particularCertificatePage"
          text="Išsami informacija"
        />
      </Box>
    </Layout>
  );
}

function CustomLink({ href, text }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button onClick={handleClick}>
      <Typography variant="button">{text}</Typography>
    </Button>
  );
}
