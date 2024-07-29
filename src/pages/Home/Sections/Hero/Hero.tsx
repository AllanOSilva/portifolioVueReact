import { Grid, Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/selfie.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const Hero =() => {

    const StyledHero = styled("div") (()=>({
        backgroundColor:"lightblue",
        height:"100vh"
        }))
    
    const StyledImg = styled("img") (()=>({
            width: "100%",
            borderRadius:"50%",
            
            

            }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StyledImg src={Avatar} alt="foto selfie" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color='primary' variant="h2" textAlign="center">
                        Állan Oliveira da Silva
                        </Typography>
                        <Typography color='primary' variant="h3" textAlign="center">
                        Sou um Engenheiro Front-End
                        </Typography>
                        <Grid container marginTop="24px" display="flex" justifyContent="center">
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <button>
                                    <DownloadIcon />
                                    Download CV
                                </button>
                            </Grid>
                            <Grid item xs={12} md={4}  display="flex" justifyContent="center">
                                <button>
                                    <EmailIcon />
                                    Contato
                                </button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero