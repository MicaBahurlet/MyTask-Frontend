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
                
                <HeroCTA to="/login">
                    Iniciar sesión
                </HeroCTA>
            </HeroContent>
            <HeroImageContainer>
                <HeroImage src={ImgHero} alt="Hero" />
            </HeroImageContainer>
        </HeroContainer>
    );
}



// import ImgHero from "../../img/Hero.png";
// import { HeroContainer, HeroContent, HeroTitle, HeroDescription, HeroCTA, HeroImageContainer, HeroImage } from "./HeroStyles.js";

// export default function Hero() {
//     return (
//         <HeroContainer>
//             <HeroContent>
//                 <HeroTitle>
//                     Administrá tu tiempo de manera eficiente.
//                 </HeroTitle>
//                 <HeroDescription>
//                     MyTask. Crea y editá tus tareas
//                 </HeroDescription>
                
//                 <HeroCTA to="/login">
//                     Iniciar sesion
//                 </HeroCTA>
//             </HeroContent>
//             <HeroImageContainer>
//                 <HeroImage src={ImgHero} alt="Hero" />
//             </HeroImageContainer>
//         </HeroContainer>
//     );
// }
