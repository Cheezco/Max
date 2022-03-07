//Press ctrl + s to save everytime
import Layout from "../components/layout/main/Layout";
import { Box } from "@mui/material";
import styles from "../styles/pages/informationPage/information.module.css";

export default function Information() {
  return (
    <Layout>
      <Box className={styles.container}> <p className={styles.contacts1}>Kontaktai</p>
      <p className={styles.contacts2}>Mindaugas Žiukas - </p>
      <p className={styles.contacts2}>Matas Grigonis - </p>
      <p className={styles.contacts2}>Augustas Druceika - </p></Box>
    </Layout>
  );
}
