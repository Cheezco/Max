import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import styles from "../../../styles/layout/main/sidebar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Logout, More } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <Box className={styles.outerContainer}>
      <Paper variant='outlined' className={styles.container}>
        <Avatar />
        <UserInformation />
        <br />
        <Links />
      </Paper>
    </Box>
  );
}

function Avatar() {
  return (
    <Box className={styles.imageContainer}>
      <Image
        src='/images/default/avatarPlaceholder.png'
        quality={100}
        width={100}
        height={100}
        alt='avatar'
        className={styles.avatar}
      />
    </Box>
  );
}

function UserInformation() {
  return (
    <Paper variant='outlined'>
      <Box className={styles.userInformation}>
        <Typography>Vardas Pavardė</Typography>
        <Typography variant='caption'>Gydytojas: Vardas Pavardė</Typography>
        {/* <Button variant='outlined'>
          <Typography variant='button'>Informacija</Typography>
        </Button>
        <Button variant='outlined'>
          <Typography variant='button'>Atsijungti</Typography>
        </Button> */}
        <Box>
          <IconButton>
            <More color='info' />
          </IconButton>
          <IconButton>
            <Logout color='error' />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}

function Links() {
  return (
    <Paper variant='outlined' className={styles.linkContainer}>
      <Box className={styles.linkInnerContainer}>
        <CustomLink href='/' text='Pagrindinis' />
        <Divider />
        <CustomLink href='/' text='Diagnozės' />
        <Divider />
        <CustomLink href='/certificatePage' text='Pažymos' />
        <Divider />
        <CustomLink href='/' text='Skiepų kalendorius' />
        <Divider />
        <CustomLink href='/' text='Pažymėjimai' />
      </Box>
    </Paper>
  );
}

function CustomLink({ href, text }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button onClick={handleClick}>
      <Typography variant='button'>{text}</Typography>
    </Button>
  );
}
