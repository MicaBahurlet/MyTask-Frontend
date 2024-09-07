import React from "react";
import { useNavigate } from "react-router-dom";
import ImgHero from "../../img/Hero3.png";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroCTA,
  HeroImageContainer,
  HeroImage,
} from "./HeroStyles.js";
import { Fade } from "react-awesome-reveal";

function Hero() {
  const token = localStorage.getItem("token"); // verifica token en localStorage

  return (
    <HeroContainer>
      <HeroImageContainer>
        <Fade delay={100}>
          <HeroImage src={ImgHero} alt="Hero" />
        </Fade>
      </HeroImageContainer>

      <HeroContent>
        <Fade cascade damping={0.1} direction="down" triggerOnce>
          <HeroTitle>Administrá tu tiempo de manera eficiente.</HeroTitle>
        </Fade>
        <Fade cascade damping={0.1} direction="down" triggerOnce>
          <HeroDescription>MyTask. Crea y editá tus tareas</HeroDescription>
        </Fade>
        <Fade cascade damping={0.8} direction="in" triggerOnce>
          <HeroCTA to={token ? "/dashboard" : "/login"}>
            {token ? "Mis Tareas" : "Iniciar Sesión"}
          </HeroCTA>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
