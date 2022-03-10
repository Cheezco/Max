import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import styles from "../../../styles/layout/main/sidebar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const handleLinkClick = (href) => {
    router.push(href);
  };

  return (
    <Box className={styles.outerContainer}>
      <Paper variant="outlined" className={styles.container}>
        <Box className={styles.imageContainer}>
          <Image
            src="/images/default/avatarPlaceholder.png"
            quality={100}
            width={100}
            height={100}
            alt="avatar"
          />
        </Box>
        <UserInformation />
        <br />
        <Links handleLinkClick={handleLinkClick} />
      </Paper>
    </Box>
  );
}

function UserInformation() {
  return (
    <Paper variant="outlined">
      <Box gap={1} className={styles.userInformation}>
        <Typography>Vardas Pavardė</Typography>
        <Typography variant="caption">Gydytojas: Vardas Pavardė</Typography>
        <Button variant="outlined">
          <Typography variant="button">Informacija</Typography>
        </Button>
        <Button variant="outlined">
          <Typography variant="button">Atsijungti</Typography>
        </Button>
      </Box>
    </Paper>
  );
}

function Links({ handleLinkClick }) {
  return (
    <Paper variant="outlined" className={styles.linkContainer}>
      <Box gap={0.5} className={styles.linkInnerContainer}>
        <CustomLink
          handleLinkClick={handleLinkClick}
          href="/"
          text="Pagrindinis"
        />
        <Divider />
        <CustomLink
          handleLinkClick={handleLinkClick}
          href="/"
          text="Diagnozės"
        />
        <Divider />
        <CustomLink
          handleLinkClick={handleLinkClick}
          href="/certificatePage"
          text="Pažymos"
        />
        <Divider />
        <CustomLink
          handleLinkClick={handleLinkClick}
          href="/"
          text="Skiepų kalendorius"
        />
        <Divider />
        <CustomLink
          handleLinkClick={handleLinkClick}
          href="/"
          text="Pažymėjimai"
        />
        <Divider />
      </Box>
    </Paper>
  );
}

function CustomLink({ handleLinkClick, href, text }) {
  return (
    <Button onClick={() => handleLinkClick(href)}>
      <Typography variant="button">{text}</Typography>
    </Button>
  );
}
