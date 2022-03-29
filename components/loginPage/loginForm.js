import styles from "../../styles/pages/loginPage/loginForm.module.css";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <Paper elevation={3} className={styles.form}>
        <TextField
          label='Prisijungimo vardas'
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label='Slaptažodis'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <Button variant='outlined'>
          <Typography variant='button'>Prisijungti</Typography>
        </Button>
      </Paper>
    </div>
  );
}
