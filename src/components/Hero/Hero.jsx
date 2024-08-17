import ImgHero from "../../img/Hero.png";
import { HeroContainer, HeroContent, HeroTitle, HeroDescription, HeroCTA, HeroImageContainer, HeroImage } from "./HeroStyles.js";

export default function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroTitle>
                    Administrá tu tiempo de manera eficiente.
                </HeroTitle>
                <HeroDescription>
                    MyTask. Crea y editá tus tareas
                </HeroDescription>
                {/* cambiar link a redirección */}
                <HeroCTA to="/login">
                    Iniciar sesion
                </HeroCTA>
            </HeroContent>
            <HeroImageContainer>
                <HeroImage src={ImgHero} alt="Hero" />
            </HeroImageContainer>
        </HeroContainer>
    );
}
