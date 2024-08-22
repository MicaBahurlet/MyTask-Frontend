


import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgHero from "../../img/Hero.png";
import { HeroContainer, HeroContent, HeroTitle, HeroDescription, HeroCTA, HeroImageContainer, HeroImage } from './HeroStyles.js';
import { Fade, Flip, Hinge, JackInTheBox, Roll, Slide, Zoom } from 'react-awesome-reveal';

function Hero() {
    const token = localStorage.getItem('token'); // verifica token en localStorage

    return (
        <HeroContainer>
            <HeroContent>
                <HeroTitle>Administrá tu tiempo de manera eficiente.</HeroTitle>
                <HeroDescription>MyTask. Crea y editá tus tareas</HeroDescription>
                <HeroCTA to={token ? '/dashboard' : '/login'}>
                    {token ? 'Crear Tarea' : 'Iniciar Sesión'}
                </HeroCTA>
            </HeroContent>
            <HeroImageContainer>
                <Zoom direction='in' duration={2000}>
                    <HeroImage src={ImgHero} alt="Hero" />
                </Zoom>
             </HeroImageContainer>
        </HeroContainer>
    );
}

export default Hero;
