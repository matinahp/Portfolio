import { useState, useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import { Typography, Card, Slide, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  AccountCircle,
  EmailRounded,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../constants/alphabetPersion";
import { CustomDivider } from "../components/common";

const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);

  const theme = useTheme();
  const [start, setStart] = useState(false);
  const [start2, setStart2] = useState(false);
  const [start3, setStart3] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading2(true);
    setLoading3(true);
    setLoading4(true);

    return () => {
      setLoading(false);
      setLoading2(false);
      setLoading3(false);
      setLoading4(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        overflowY: "scroll",
        backgroundColor: theme.palette.mode === "dark" ? "#212121" : "#fafafa",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <CustomDivider
        bColor="success.main"
        cColor="success"
        align="center"
        icon={<AccountCircle />}
        text="ارتباط با من"
      />

      <Grid container sx={{ mt: 5 }}>
        <Slide
          direction="up"
          in={loading}
          style={{ transitionDelay: loading ? "200ms" : "0ms" }}
        >
          <Grid xs={12} sm={12} md={12}>
            <Card
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                m: 5,
                p: 2,
              }}
            >
              <Button sx={{ height: 50, width: "200px", p: 3 }}>
                <EmailRounded color="success" />
                <a
                  href="mailto:matinahp8181@gmail.com"
                  alt="email"
                  style={{
                    color: "#2e7d32",
                    textDecoration: "none",
                    marginLeft: "10px",
                  }}
                >
                  به من ایمیل بزن
                </a>
              </Button>

              <Typography variant="h6" display="inline-block">
                <RandomReveal
                  isPlaying
                  duration={3}
                  characterSet={alphabetPersian}
                  characters="رو دکمه بزن تا بتونی بهم ایمیل بزنی و باهم در ارتباط باشیم"
                  onComplete={() => setStart(true)}
                />
              </Typography>
            </Card>
          </Grid>
        </Slide>

        <Slide
          direction="up"
          in={loading2}
          style={{ transitionDelay: loading2 ? "3000ms" : "0ms" }}
        >
          <Grid xs={12} sm={12} md={12}>
            <Card
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                m: 5,
                p: 2,
              }}
            >
              <Button sx={{ height: 50, width: "200px", p: 3 }}>
                <GitHub color="success" />
                <a
                  href="https://github.com/matinahp"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="github"
                  style={{
                    color: "#2e7d32",
                    textDecoration: "none",
                    marginLeft: "10px",
                  }}
                >
                  گیت هاب من
                </a>
              </Button>
              {start && (
                <Typography variant="h6" display="inline-block">
                  <RandomReveal
                    isPlaying
                    duration={3}
                    characterSet={alphabetPersian}
                    characters="از صفحه گیت هاب من دیدن کن"
                    onComplete={() => setStart2(true)}
                  />
                </Typography>
              )}
            </Card>
          </Grid>
        </Slide>

        <Slide
          direction="up"
          in={loading3}
          style={{ transitionDelay: loading3 ? "6000ms" : "0ms" }}
        >
          <Grid xs={12} sm={12} md={12}>
            <Card
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                m: 5,
                p: 2,
              }}
            >
              <Button sx={{ height: 50, width: "200px", p: 3 }}>
                <Instagram color="success" />
                <a
                  href="https://instagram.com/matin_ahp?igshid=MzNlNGNkZWQ4Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="instagram"
                  style={{
                    color: "#2e7d32",
                    textDecoration: "none",
                    marginLeft: "10px",
                  }}
                >
                  اینستاگرام
                </a>
              </Button>
              {start2 && (
                <Typography variant="h6" display="inline-block">
                  <RandomReveal
                    isPlaying
                    duration={3}
                    characterSet={alphabetPersian}
                    characters="راه ارتباطی دیگر با من اینستاگرام من است"
                    onComplete={() => setStart3(true)}
                  />
                </Typography>
              )}
            </Card>
          </Grid>
        </Slide>

        <Slide
          direction="up"
          in={loading4}
          style={{ transitionDelay: loading4 ? "9000ms" : "0ms" }}
        >
          <Grid xs={12} sm={12} md={12}>
            <Card
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                m: 5,
                p: 2,
              }}
            >
              <Button sx={{ height: 50, width: "200px", p: 3 }}>
                <LinkedIn color="success" />
                <a
                  href="https://www.linkedin.com/in/matin-ahmadipoor-b3480b240"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="linkedin"
                  style={{
                    color: "#2e7d32",
                    textDecoration: "none",
                    marginLeft: "10px",
                  }}
                >
                  لینکداین
                </a>
              </Button>
              {start3 && (
                <Typography variant="h6" display="inline-block">
                  <RandomReveal
                    isPlaying
                    duration={3}
                    characterSet={alphabetPersian}
                    characters="میتونیم باهم دیگه از طریق لینکداین هم در ارتباط باشیم"
                    onComplete={() => setStart(true)}
                  />
                </Typography>
              )}
            </Card>
          </Grid>
        </Slide>
      </Grid>
    </Card>
  );
};

export default Contact;
