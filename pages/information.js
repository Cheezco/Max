//Press ctrl + s to save everytime
import Layout from "../components/layout/main/Layout";
import { Box, Divider } from "@mui/material";
import styles from "../styles/pages/informationPage/information.module.css";
import { styled } from "@mui/system";

export default function Information() {
  return (
    <Layout>
      <div className={styles.padding}>
      <Box className={styles.container}> 
        <p className={styles.contactsBigText}>Kontaktai</p>
        <p className={styles.contactsSmallText}>Mindaugas Žiukas - mindaugas.ziukas@ktu.edu</p>
        <p className={styles.contactsSmallText}>Matas Grigonis - matas.grigonis@ktu.edu</p>
        <p className={styles.contactsSmallText}>Augustas Druceika - augustas.druceika@ktu.edu</p>
        <p className={styles.contactsSmallText}>Telefonas - 864269842114564654654654654 </p>
        <p className={styles.contactsSmallText}>Elektroninis paštas - maxSveikata@max.lt (neveikiantis)</p>
        <p className={styles.contactsSmallText}>Darbo laikas:</p>
      <Root>
        <table>
          <tr>
            <th >Diena</th>
            <th>Laikas</th>
        </tr>
        <tr >
          <td>Pirmadienis</td>
          <td>9:00 - 12:00</td>
        </tr>
        <tr >
          <td>Antradienis</td>
          <td>9:00 - 12:00</td>
        </tr>
        <tr >
          <td>Trečiadienis</td>
          <td>9:00 - 12:00</td>
        </tr>
        <tr >
          <td>Ketvirtadienis</td>
          <td>9:00 - 12:00</td>
        </tr>
        
      </table>
      </Root>
      </Box>
        </div>      
    </Layout>
  );
}

const Root = styled("div")`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 20%;
  }

  td,
  th {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
  }
`;