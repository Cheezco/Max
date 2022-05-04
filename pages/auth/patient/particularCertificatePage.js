import * as React from "react"; // BE ŠITO NEVEIKIA KODAS
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
                <Typography>Pacientas</Typography>
              </TableCell>
              <TableCell>
                <Typography>Vardas Pavardė</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Pažymos išdavimo data</Typography>
              </TableCell>
              <TableCell>
                <Typography>0000-00-00</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Pažyma galioja iki</Typography>
              </TableCell>
              <TableCell>
                <Typography>0000-00-00</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Išdavusio gydytojo vardas ir pavardė</Typography>
              </TableCell>
              <TableCell>
                <Typography>Vardas Pavardė</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Pažymos tipas:</Typography>
              </TableCell>
              <TableCell>
                <Typography>Tipas iš nurodytų virų lentelės sąraše</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aprašymas</TableCell>
              <TableCell style={{ width: "30%" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
        <h2 className={styles.alignCenter}>Pažyma</h2>
      </Typography>
      <Box className={styles.certificate_center}>
        <Card sx={{ width: "70%" }} variant="outlined">
          {card}
        </Card>
      </Box>
      <Box>
        <Typography>
          Pažymėjimai gali būti šių tipų:
          <ul>
            <li>Nedarbingumo pažyma</li>
            <li>Mirties liudijimas</li>
            <li>Asmens privalomojo sveikatos tikrinimo kortelė</li>
            <li>Vairuotojo sveikatos patikrinimo medicininė pažyma</li>
            <li>Vaiko gimimo pažymėjimas</li>
            <li>Privalomojo sveikatos patikrinimo medicininė pažyma</li>
            <li>Asmens medicininė knygelė</li>
            <li>Mokinio sveikatos pažymėjimas</li>
          </ul>
        </Typography>
      </Box>
    </Layout>
  );
}
