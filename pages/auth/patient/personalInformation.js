import React from "react"; // BE ŠITO NEVEIKIA KODAS
import Layout from "../../../components/layout/main/Layout";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  stepButtonClasses,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import styles from "../../../styles/pages/particularCertificate/particularCertificate.module.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>Vardas</Typography>
              </TableCell>
              <TableCell>
                <Typography>--------------</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Pavardę</Typography>
              </TableCell>
              <TableCell>
                <Typography>--------------</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Asmens kodas</Typography>
              </TableCell>
              <TableCell>
                <Typography>--------------</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Adresas</Typography>
              </TableCell>
              <TableCell>
                <Typography>--------------</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Ligoninė</Typography>
              </TableCell>
              <TableCell>
                <Typography>--------------</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Telefono numeris</Typography>
              </TableCell>
              <TableCell>
                <Typography>--------------</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </React.Fragment>
);

export default function ParticularCertificatePage() {
  return (
    <Layout>
      <Typography>
        <h2 className={styles.alignCenter}>ASMENS INFORMACIJA</h2>
      </Typography>
      <Box className={styles.certificate_center}>
        <Card sx={{ width: "70%" }} variant="outlined">
          {card}
        </Card>
      </Box>
    </Layout>
  );
}
