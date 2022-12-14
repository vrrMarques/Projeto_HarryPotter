import {Grid,ThemeProvider,createTheme,ButtonBase} from "@mui/material";
import Link from "next/link";

export default function Inicio() {
  return (
    <div>
      <div className="goldBox"></div>

      <div>
        <img
          src="/images/fundo.png"
          className="castelo"
          alt="imagem hogwarts"
        />
        <img src="/images/logo.png" className="logo" />
      </div>

      <button className="retangulo" data-testid="btnAllChars">
        <a href="allChars">VEJA TODOS PERSONAGENS</a>
      </button>

      <div className="vejaCasas">
        <img src="/images/hogwartsShield.png" alt="shield" className="shield" />
        <p className="navegueCasas">Navegue pelas Casas</p>
        <div className="line" />
      </div>

      
      <ThemeProvider
        theme={createTheme({
          breakpoints: {
            values: {
              laptop: 1024,
              tablet: 800,
              mobileXL: 640,
              mobileL: 480,
              mobileMd: 425,
              mobileSm: 360,
              desktop: 1280,
              desktopHD: 1440,
              desktopFH: 1920,
            },
          },
        })}
      >
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{
            mobileSm: 1,
            mobileMd: 1,
            mobileL: 1,
            mobileXL: 1,
            tablet: 2,
            laptop: 3,
            desktop: 4,
            desktopHD: 5,
            desktopFH: 6,
          }}
        >
          <Grid
            item
            mobileSm={2.3}
            mobileMd={2.3}
            mobileL={2.5}
            mobileXL={2.5}
            tablet={2.6}
            laptop={2.8}
            desktop={2.8}
            desktopHD={2.8}
            desktopFH={2.5}
            sx={{ marginLeft: "64px" }}
          >
            <ButtonBase data-testid="btnGryffindor">
              <Link href="/houses/gryffindor">
                <img src="/images/grifinoria.png" className="fotos" />
              </Link>
            </ButtonBase>
          </Grid>
          <Grid
            item
            mobileSm={2.3}
            mobileMd={2.3}
            mobileL={2.5}
            mobileXL={2.5}
            tablet={2.6}
            laptop={2.8}
            desktop={2.8}
            desktopHD={2.8}
            desktopFH={2.5}
           
          >
            <ButtonBase data-testid="btnSlytherin">
              <Link href="/houses/slytherin">
                <img src="/images/sonserina.png" className="fotos" />
              </Link>
            </ButtonBase>
          </Grid>
          <Grid
            item
            mobileSm={2.3}
            mobileMd={2.3}
            mobileL={2.5}
            mobileXL={2.5}
            tablet={2.6}
            laptop={2.8}
            desktop={2.8}
            desktopHD={2.8}
            desktopFH={2.5}
            
          >
            <ButtonBase data-testid="btnHufflepuff">
              <Link href="/houses/hufflepuff">
                <img src="/images/lufa-lufa.png" className="fotos" />
              </Link>
            </ButtonBase>
          </Grid>
          <Grid
            item
            mobileSm={2.3}
            mobileMd={2.3}
            mobileL={2.5}
            mobileXL={2.5}
            tablet={2.6}
            laptop={2.8}
            desktop={2.8}
            desktopHD={2.8}
            desktopFH={2.5}
            
          >
            <ButtonBase data-testid="btnRavenclaw">
              <Link href="/houses/ravenclaw">
                <img src="/images/corvinal.png" className="fotos" />
              </Link>
            </ButtonBase>
          </Grid>
        </Grid>
      </ThemeProvider>
  
    </div>
  );
}
