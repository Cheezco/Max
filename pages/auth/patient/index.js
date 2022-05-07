import Layout from "../../../components/layout/main/layout";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  InboxIcon,
  DraftsIcon,
} from "@mui/material";
import styles from "../../../styles/pages/home/home.module.css";

export default function Home() {
  return (
    <Layout>
      <Box className={styles.container}>
        <Typography>
          <h3>Šiame lange bus matoma informacija apie:</h3>
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
