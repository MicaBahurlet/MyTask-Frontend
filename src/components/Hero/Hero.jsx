
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgHero from "../../img/Hero.png";
import { HeroContainer, HeroContent, HeroTitle, HeroDescription, HeroCTA, HeroImageContainer, HeroImage } from './HeroStyles.js';
import {  Fade } from 'react-awesome-reveal';
// import WordRotateDemo from '../WordRotate/WordRotate.jsx';


function Hero() {
    const token = localStorage.getItem('token'); // verifica token en localStorage

    return (
        <HeroContainer>
            <HeroContent>
                <Fade cascade damping={0.1} direction="down" triggerOnce>
                    <HeroTitle>Administrá tu tiempo de manera eficiente.</HeroTitle>
                </Fade>
                <Fade cascade damping={0.1} direction="left" triggerOnce>
                    <HeroDescription>MyTask. Crea y editá tus tareas</HeroDescription>
                </Fade>
                <Fade cascade damping={0.1} direction="left" triggerOnce >
                    <HeroCTA to={token ? '/dashboard' : '/login'}>
                        {token ? 'Crear Tarea' : 'Iniciar Sesión'}
                    </HeroCTA>
                </Fade>
            </HeroContent>
            <HeroImageContainer>
            
                    <HeroImage src={ImgHero} alt="Hero" />
                
             </HeroImageContainer>
        </HeroContainer>
    );
}

export default Hero;
