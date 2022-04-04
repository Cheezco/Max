//Press ctrl + s to save everytime
import Layout from "../components/layout/main/Layout";
import { Box, Divider } from "@mui/material";
import styles from "../styles/pages/formPage/form.module.css";

export default function Form() {
    return (
        <Layout>
            <div className={styles.padding}>
                <Box className={styles.container}>
                    <form id="cForm" 
                    name="complaint-form" 
                    acceptCharset="utf-8" 
                    method="post" 
                    action="">
                        <fieldset id="fs-frm-inputs" className={styles.noBorder}>
                            <label>Vardas</label><br/>
                            <input type="text" id="fname" name="fname" placeholder="Vardas">
                                </input><br></br>
                            <label>Elektronins paštas</label><br/>
                            <input type="email" id="email(Privalomas)" name="email" 
                            required=""
                            placeholder="elektronis@pastas.lt">
                                </input><br></br>
                            <label>Nusiskundimas</label><br/>
                            <textarea type="text" id="complaint" name="complaint" 
                            placeholder="Skundžiuosi, kad svetaines pagalbos mygtukas neveikia"
                            className={styles.textarea}
                            required="">
                                </textarea><br/>
                        </fieldset>
                        <input type="submit" value="Pranešti"/>
                    </form>
                </Box>
            </div>      
        </Layout>
    );
  }