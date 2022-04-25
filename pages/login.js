import styles from "../styles/pages/loginPage/login.module.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import LoginForm from "../components/loginPage/loginForm";
import { getCsrfToken } from "next-auth/react";

export default function Login({ csrfToken }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>
        <IconButton onClick={() => router.push("/")}>
          <CloseIcon />
        </IconButton>
      </div>
      <LoginForm csrfToken={csrfToken} />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
