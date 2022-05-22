import Layout from "../../../components/layout/main/layout";
import {
  Box,
  Button,
  Typography,
  List,
  Paper,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  InboxIcon,
  DraftsIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Dropdown,
  DropdownItem,
  Input,
} from "@mui/material";
import styles from "../../../styles/pages/home/home.module.css";

export default function Home() {
  return (
    <Layout>
      <Box className={styles.container}>
        <Typography>
          <h1 align="center">Pagrindinis puslapis</h1>
          <Box className={styles.table_center}>
            <Paper sx={{ width: "70%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold" }}
                        align="center"
                        colSpan={2}
                      >
                        Registracija pas gydytoją
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">Gydytojas</TableCell>
                      <TableCell align="center">
                        <select name="doctors" id="doctors">
                          <option value="1">Ingrida Jackūnienė</option>
                          <option value="2">Lina Goberienė</option>
                          <option value="3">Margarita Paulauskienė</option>
                          <option value="4">Arnas Šeškevičius</option>
                          <option value="5">Haroldas Janerikas</option>
                          <option value="5">Ričardas Jurevičius</option>
                          <option value="5">Prof. Rūta Pribuišienė</option>
                          <option value="5">Vilija Kardišienė</option>
                          <option value="5">Doc. dr. Donatas Inčiūra</option>
                        </select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Data</TableCell>
                      <TableCell align="center">
                        <input
                          type="date"
                          id="DOB"
                          name="DOB"
                          min="2022-01-01"
                          max="2022-12-31"
                        ></input>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Laikas</TableCell>
                      <TableCell align="center">
                        <select name="time" id="time">
                          <option value="1">9:00</option>
                          <option value="1">10:00</option>
                          <option value="1">11:00</option>
                          <option value="1">12:00</option>
                          <option value="1">13:00</option>
                          <option value="1">14:00</option>
                          <option value="1">15:00</option>
                          <option value="1">16:00</option>
                          <option value="1">17:00</option>
                          <option value="1">18:00</option>
                        </select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center" colSpan={2}>
                        <Button variant="contained" color="success">
                          Registruotis
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>

          <Box className={styles.table_center} sx={{ mt: 10 }}>
            <Paper sx={{ width: "70%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold" }}
                        align="center"
                        colSpan={2}
                      >
                        Tyrimai
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        Tyrimas dėl tuberkuliozės1
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        Tyrimas dėl tuberkuliozės2
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        Tyrimas dėl cukrinio diabeto
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>

          <Box className={styles.table_center} sx={{ mt: 10 }}>
            <Paper sx={{ width: "70%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold" }}
                        align="center"
                        colSpan={2}
                      >
                        Siuntimai
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">Gydytojas</TableCell>
                      <TableCell align="center" sx={{ width: "50%" }}>
                        Priežastis
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        Gydytojas dermatovenerologas
                      </TableCell>
                      <TableCell align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ante purus, hendrerit quis nisi eu, molestie
                        vulputate massa. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia curae;
                        Sed vitae tristique neque, placerat pulvinar orci.
                        Nullam ultricies faucibus sapien eget rhoncus.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Gydytojas patologas</TableCell>
                      <TableCell align="center" sx={{ width: "50%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ante purus, hendrerit quis nisi eu, molestie
                        vulputate massa. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia curae;
                        Sed vitae tristique neque, placerat pulvinar orci.
                        Nullam ultricies faucibus sapien eget rhoncus.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>

          <Box className={styles.table_center} sx={{ mt: 10 }}>
            <Paper sx={{ width: "70%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold" }}
                        align="center"
                        colSpan={2}
                      >
                        Vaistų receptai
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">Vaistai</TableCell>
                      <TableCell align="center" sx={{ width: "50%" }}>
                        Recepto data
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        SUMATRIPTAN ACTAVIS, 50mg
                      </TableCell>
                      <TableCell align="center">2022-05-20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        IBUPROM EXPRESS, 400 mg
                      </TableCell>
                      <TableCell align="center" sx={{ width: "50%" }}>
                        2022-05-20
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>

          <List>
            <ListItem>Registracija</ListItem>
            <ListItem>Tyrimai</ListItem>
            <ListItem>Siuntimai</ListItem>
            <ListItem>Receptai</ListItem>
            <ListItem>
              <a
                href="https://miro.com/app/board/uXjVOCnESr8=/"
                target="_blank"
                rel="noreferrer"
              >
                Nuoroda į wireframe
              </a>
            </ListItem>
          </List>
        </Typography>
      </Box>
    </Layout>
  );
}
