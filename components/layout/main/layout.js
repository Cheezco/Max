import { Box } from "@mui/material";
import styles from "../../../styles/layout/main/layout.module.css";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <Box className={styles.container}>
      <Box className={styles.innerContainer}>
        <Box className={styles.sidebarContainer}>
          <Sidebar />
        </Box>
        <Box className={styles.mainContentContainer}>{children}</Box>
      </Box>
      <Box className={styles.footerContainer}>
        <Footer />
      </Box>
    </Box>
  );
}
