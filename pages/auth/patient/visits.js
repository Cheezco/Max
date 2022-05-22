import Layout from "../../../components/layout/main/Layout";
import { Box, TextField, Button } from "@mui/material";
import styles from "../../../styles/pages/certificatePage/certificate.module.css";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function sending() {
  return (
    <Layout>
      <Box className={styles.colors}>
        <h1>Apsilankymai pas gydytoją</h1>
        <p>
          Šiame puslapyje pateikiama informacija apie visus paciento
          apsilankymus pas gydytoją
        </p>
      </Box>
      <Box className={styles.table_center}>
        <Paper sx={{ width: "70%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell colSpan={2}>Gydytojas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ width: "40%" }}>0000-00-00</TableCell>
                  <TableCell>Gražina Ozgiuneš</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">
                      Atšaukti vizitą
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: "40%" }}>0000-00-00</TableCell>
                  <TableCell>Andrius Kederys</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">
                      Atšaukti vizitą
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: "40%" }}>0000-00-00</TableCell>
                  <TableCell>Andrius Kederys</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">
                      Atšaukti vizitą
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: "40%" }}>0000-00-00</TableCell>
                  <TableCell>Brigita Glebauskienė</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">
                      Atšaukti vizitą
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: "40%" }}>0000-00-00</TableCell>
                  <TableCell>Ieva Merkytė</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">
                      Atšaukti vizitą
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: "40%" }}>0000-00-00</TableCell>
                  <TableCell>Janis Zinkus</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">
                      Atšaukti vizitą
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Layout>
  );
}
