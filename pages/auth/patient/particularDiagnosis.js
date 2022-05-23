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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { getToken } from "next-auth/jwt";
import https from "https";
import styles from "../../../styles/pages/particularDiagnosis/particularDiagnsis.module.css";
import { useRouter } from "next/router";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function DiagnosisCardContent({ diagnosis }) {
  return (
    <CardContent>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>Diagnozė</Typography>
              </TableCell>
              <TableCell>
                <Typography>{diagnosis.name}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Nustatyta(data):</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {new Date(diagnosis.date).toLocaleDateString("lt-LT")}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aprašymas</TableCell>
              <TableCell style={{ width: "70%" }}>{diagnosis.notes}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  );
}
export default function ParticularDiagnosis({ diagnosis }) {
  const router = useRouter();

  React.useEffect(() => {
    if (!diagnosis) {
      router.push("/auth/patient/diagnosis");
    }
  });

  return (
    <Layout>
      <h2 className={styles.alignCenter}>Išsami informacija apie diagnozę</h2>
      <Box className={styles.certificate_center}>
        <Card sx={{ width: "70%" }} variant="outlined" diagnosis={diagnosis}>
          <DiagnosisCardContent diagnosis={diagnosis} />
        </Card>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const req = context.req;
    const token = await getToken({ req, secret });
    const { id } = context.query;
    const agent = new https.Agent({ rejectUnauthorized: false });
    const response = await fetch("https://localhost:5001/api/diagnoses/" + id, {
      agent,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
    });

    if (!response.ok) {
      return { props: {} };
    }

    const diagnosis = await response.json();

    return {
      props: {
        diagnosis,
      },
    };
  } catch {
    return { props: {} };
  }
}
