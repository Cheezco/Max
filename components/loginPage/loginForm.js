import styles from "../../styles/pages/loginPage/loginForm.module.css";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";

export default function LoginForm({ csrfToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form
      className={styles.formContainer}
      method="post"
      action="/api/auth/callback/credentials"
    >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <Paper elevation={3} className={styles.form}>
        <TextField
          name="username"
          label="Prisijungimo vardas"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          name="password"
          label="Slaptažodis"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button variant="outlined" type="submit">
          <Typography variant="button">Prisijungti</Typography>
        </Button>
      </Paper>
    </form>
  );
}
