import styles from "../styles/pages/registrationPage/registration.module.css";
import { useRouter } from "next/router";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";

export default function Registration() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const router = useRouter();

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  const handleHospitalChange = (event) => {
    setHospital(event.target.value);
  };
  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      Username: userName,
      FirstName: name,
      LastName: lastname,
      Password: password,
      Hospital: hospital,
      DoctorId: doctor === "" ? "0" : doctor,
      Email: email,
      PersonalCode: id,
    };
    const response = await fetch("http://localhost:5000/api/register/patient", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push("/login");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleFormSubmit}>
        <Paper elevation={3} className={styles.blocks}>
          <TextField
            label="Prisijungimo vardas"
            value={userName}
            onChange={handleUsernameChange}
          />
          <TextField label="Vardas" value={name} onChange={handleNameChange} />
          <TextField
            label="Pavardė"
            value={lastname}
            onChange={handleLastnameChange}
          />
          <TextField
            label="Slaptažodis"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            label="Ligoninė"
            value={hospital}
            onChange={handleHospitalChange}
          />
          <TextField
            label="Gydytojas"
            value={doctor}
            onChange={handleDoctorChange}
          />
          <TextField
            label="Elektroninis paštas"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Asmens kodas"
            value={id}
            onChange={handleIdChange}
          />
          <Button variant="outlined" type="submit">
            <Typography variant="button">Registruotis</Typography>
          </Button>
        </Paper>
      </form>
    </div>
  );
}
