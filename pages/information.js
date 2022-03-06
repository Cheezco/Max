//Press ctrl + s to save everytime
import Layout from "../components/layout/main/Layout";
import { Box } from "@mui/material";
import styles from "../styles/pages/informationPage/information.module.css";

export default function Information() {
  return (
    <Layout>
      <Box className={styles.container}>Informacinis puslapis</Box>
    </Layout>
  );
}
