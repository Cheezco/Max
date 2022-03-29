import styles from "../styles/pages/loginPage/login.module.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import LoginForm from "../components/loginPage/loginForm";

export default function Login() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>
        <IconButton onClick={() => router.push("/")}>
          <CloseIcon />
        </IconButton>
      </div>
      <LoginForm />
    </div>
  );
}
