import styles from "../styles/pages/loginOrRegisterPage/loginOrRegisterPage.module.css";
import { Button, Typography, Paper } from "@mui/material";

export default function LoginOrRegister() {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <Paper elevation={3} className={styles.blockForButtons}>
                    <Button href='/login' variant='outlined'>
                        <Typography variant='button'>Prisijungti</Typography>
                    </Button>
                    <Button href='/registration' variant='outlined'><br></br>
                        <Typography variant='button'>Registracija</Typography>
                    </Button>
                </Paper>
            </div>
        </div>
    );
  }