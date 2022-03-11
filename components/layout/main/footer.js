import { Box, Button, Paper, Typography } from "@mui/material";
import styles from "../../../styles/layout/main/footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <Paper variant='outlined' className={styles.container}>
      <Box gap={2} className={styles.logoContainer}>
        <Logo src='/images/default/logoPlaceholder.png' />
        <Logo src='/images/default/logoPlaceholder.png' />
        <Logo src='/images/default/logoPlaceholder.png' />
      </Box>
      <Box className={styles.buttonContainer}>
        <Button>
          <Typography variant='button'>Privatumo politika</Typography>
        </Button>
        <Button>
          <Typography variant='button'>Pagalba</Typography>
        </Button>
        <Button>
          <Typography variant='button'>Kontaktai</Typography>
        </Button>
      </Box>
    </Paper>
  );
}

function Logo({ src }) {
  return <Image src={src} quality={100} width={150} height={100} alt='' />;
}
