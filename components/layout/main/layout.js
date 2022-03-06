import { Box } from "@mui/material";
import styles from "../../../styles/layout/main/layout.module.css";

export default function Layout({ children }) {
  return (
    <Box component="div" className={styles.container}>
      <Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
