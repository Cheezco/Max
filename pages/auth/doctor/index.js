import Layout from "../../../components/layout/mainDoctor/layout";
import { Box, Button, List, ListItem } from "@mui/material";
import styles from "../../../styles/pages/doctorHomePage/doctorHome.module.css";

export default function Home() {
  return (
    <Layout>
      <Box className={styles.container}>
        <h1 align="center">Pagrindinis puslapis</h1>
        <LinkToWireframe />
      </Box>
    </Layout>
  );
}

function LinkToWireframe() {
  return (
    <List>
      <ListItem>
        <Button variant="contained" color="success">
          <a
            href="https://miro.com/app/board/uXjVOCnESr8=/"
            target="_blank"
            rel="noreferrer"
          >
            Nuoroda į svetainės &quot;wireframe&quot;
          </a>
        </Button>
      </ListItem>
    </List>
  );
}
