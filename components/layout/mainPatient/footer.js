import { Box, Button, Paper, Typography } from "@mui/material";
import styles from "../../../styles/layout/mainPatient/footer.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  return (
    <Paper variant="outlined" className={styles.container}>
      <Box className={styles.logoContainer}>
        <Logo src="/images/default/logoPlaceholder.png" alt="logo1" />
        <Logo src="/images/default/logoPlaceholder.png" alt="logo2" />
        <Logo src="/images/default/logoPlaceholder.png" alt="logo3" />
      </Box>
      <Box className={styles.buttonContainer}>
        <NavigationButton href="/privacy" text="Privatumo politika" />
        <NavigationButton href="/help" text="Pagalba" />
        <NavigationButton href="/information" text="Kontaktai" />
      </Box>
    </Paper>
  );
}

function Logo({ src, alt }) {
  if (typeof alt === "undefined") {
    alt = "";
  }

  return <Image src={src} quality={100} width={150} height={100} alt={alt} />;
}

function NavigationButton({ href, text }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button onClick={handleClick}>
      <Typography variant="button">{text}</Typography>
    </Button>
  );
}
