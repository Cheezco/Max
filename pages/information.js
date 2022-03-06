import Layout from "../components/layout/main/Layout";
import { Box } from "@mui/material";
import styles from "../styles/pages/informationPage/information.module.css";

export default function Home() {
  return (
    <Layout>
      <Box className={styles.container}>Nezinau</Box>
    </Layout>
  );
}