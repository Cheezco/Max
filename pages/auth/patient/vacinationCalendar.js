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
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../../components/layout/main/layout";
import styles from "../../../styles/pages/vacinationCalendarPage/vacinationCalendar.module.css";
import { getToken } from "next-auth/jwt";
import https from "https";

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

export default function VacinationCalendar({ vaccinations }) {
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
            vaccinations={vaccinations}
            page={page}
            itemsPerPage={itemsPerPage}
          />
          <TablePagination
            component="div"
            count={vaccinations.length}
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

function VacinationTable({ vaccinations, page, itemsPerPage }) {
  return (
    <TableContainer>
      <Table>
        <VacinationTableHead />
        <VacinationTableBody
          vaccinations={vaccinations}
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

function VacinationTableBody({ vaccinations, page, itemsPerPage }) {
  const router = useRouter();

  return (
    <TableBody>
      {vaccinations &&
        vaccinations
          .sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
          .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
          .map((vaccination, index) => (
            <TableRow
              key={index}
              onClick={() =>
                router.push(
                  "/auth/patient/particularVacine?id=" + vaccination.id
                )
              }
            >
              <TableCell>
                <Typography variant="body2">{vaccination.name}</Typography>
              </TableCell>
              <TableCell align="right">
                {new Date(vaccination.date).toDateString()}
              </TableCell>
            </TableRow>
          ))}
    </TableBody>
  );
}

export async function getServerSideProps(context) {
  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const req = context.req;
    const token = await getToken({ req, secret });
    const agent = new https.Agent({ rejectUnauthorized: false });
    const response = await fetch(
      "https://localhost:5001/api/vaccinations/patient/" + token.userId,
      {
        agent,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );

    if (!response.ok) {
      return { props: {} };
    }

    const vaccinations = await response.json();

    return {
      props: {
        vaccinations,
      },
    };
  } catch {
    return { props: {} };
  }
}
