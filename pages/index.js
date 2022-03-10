import Layout from "../components/layout/main/Layout";
import { Box } from "@mui/material";
import styles from "../styles/pages/home/home.module.css";

export default function Home() {
  return (
    <Layout>
      <Box className={styles.container}>Home test</Box>
    </Layout>
  );
}
