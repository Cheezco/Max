import Layout from "../components/layout/main/Layout";
import { Box } from "@mui/material";
import styles from "../styles/pages/certificatePage/certificate.module.css";

export default function Certificate() {
  return (
    <Layout>
      <Box className={styles.colors}>Pažymų puslapis</Box>
    </Layout>
  );
}
