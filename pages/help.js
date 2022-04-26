//Press ctrl + s to save everytime
import Layout from "../components/layout/main/Layout";
import { Box, Divider, List } from "@mui/material";
import styles from "../styles/pages/helpPage/help.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Help() {
  return (
    <Layout>
        <div className={styles.padding}>
            <Box className={styles.container} > 
                <p className={styles.bigText}>Dažniausiai užduodami klausimai</p>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Kaip prisijungti?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Norėdami prisijungti paspauskite mygtuką prisijungti ir jus busite perkelti
                             į prisijungimo puslapį. Šiame puslapyje iveskite savo prisijungimo duomenis 
                             kurie yra: prisijungimo vardas ir slaptažodis. Jei neturite paskyros prašome 
                             susikurti sekdami žingsnius kurie yra aprašyti kaip prisiregistruoti.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Kaip prisiregistruoti?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Norėdami prisiregistruoti spauskite mygtuka registracija ir jus busite 
                            perkelti į registracijos puslapi kuriame reikės įvesti tokius duomenis: 
                            Prisijungimo vardas, Vardas, Pavardė, Slaptažodis, Ligoninę, Gydytojas, 
                            Elektronins paštas, Asmens kodas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Registracija pas gydytoją</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Norėdami registruotis pas gydytoją nueikite į pagrindinį puslapi ten pamatysite 
                            skilti registracija. Paspaude ant jos busite perkelti į puslapi kuriame galėsite 
                            prisiregistruoti pas gydytoją pasirinkę ligoninę, gydytoją ir laika, o kabinėtas 
                            bus paskirstas automatiškai. Atsiminkite, kad jei nerandate norimo gydytojo ligoninėje 
                            pasirinktu laiku tai jis tikriausiai nedirba tuo laiku arba toj ligoninej.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Kaip rašyti nusiskundimą?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nuėje į nusiskundimų puslapi parašykite vardą ir elektroninį paštą, kad galėtumem 
                            su jumis susisiekti. Kai ši veiksma padarėte rašykite į NUSISKUNDIMAS lauka savo 
                            nusiskundimą apie svetaine ar gydytojus ar ligoninę.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Kaip veikia skiepų kalendorius?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Skiepu kalendorius veikia taip, kad artimiausias skiepas arba naujausias 
                            skiepas bus rodomas viršuje kuo žemiau slinksite tuo senesnius skiepus matysite.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Kaip veikia elektroniai receptai?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Elektroniniai receptai veikia šitaip: paspaude ant elektroninio 
                            receptai jus busite nukreiptas į kitą puslapi kuriame galėsite matyti 
                            elektroninio recepto informaciją ir taip pat bus mygtukas atsisiusti 
                            paspaudus ši mygtuka jums atsius recepta kuri turite atsispausdinti ir 
                            pateikti vaistininkei pagal kuri jums bus duoti vaistai.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Jei nerandate atsakymo?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Jei nerandate atsakymo susisiekite su musu klientų aptarnavimo 
                            centro paštu maxSveikataKlientai@maxSveikata.lt
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                
            </Box>
        </div>      
    </Layout>
  );

  
}


