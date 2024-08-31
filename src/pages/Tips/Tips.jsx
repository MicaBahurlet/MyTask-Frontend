import React from "react";
import { motion } from "framer-motion"; // Importamos framer-motion para las animaciones
import {
  PageContainer,
  Title,
  Section,
  SectionTitle,
  Paragraph,
  Quote,
  QuoteAuthor,
  ImgContainer
} from "./TipsStyles.js";
import Footer from "../../components/Footer/Footer.jsx";
import ImgTips from "../../img/Tips2.jpg";

const Tips = () => {
  return (
    <>
      <PageContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Tips para optimizar tu tiempo, <br /> la importancia de crear tareas diarias.</Title>

        <ImgContainer>
          <img src={ImgTips} alt="Tips" />
        </ImgContainer>  


        <Section>
          <SectionTitle>¿Por qué es importante gestionar el tiempo?</SectionTitle>
          <Paragraph>
            La gestión del tiempo es fundamental para alcanzar nuestros objetivos
            y mantener un equilibrio saludable entre nuestras responsabilidades y
            nuestro bienestar. Cuando optimizamos nuestro tiempo, no solo
            incrementamos nuestra productividad, sino que también reducimos el
            estrés y mejoramos nuestra calidad de vida.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Consejos para optimizar el tiempo</SectionTitle>
          <Paragraph>
            1. <b>Prioriza tus tareas:</b> Enfócate en lo que realmente importa.
            Identifica las tareas más importantes y asegúrate de realizarlas
            primero.
          </Paragraph>
          <Paragraph>
            2. <b>Divide grandes proyectos:</b> Divide grandes proyectos: Descompón tareas grandes en pasos
            más pequeños y manejables. Esto te ayudará a avanzar sin sentirte
            abrumado.
          </Paragraph>
          <Paragraph>
            3. <b>Establece límites de tiempo:</b> Dedica un tiempo específico a cada
            tarea y cúmplelo. Esto evita que te distraigas o prolongues
            innecesariamente.
          </Paragraph>
          <Paragraph>
            4. <b>Elimina distracciones:</b> Identifica las fuentes de distracción y
            minimízalas mientras trabajas. Esto incluye apagar notificaciones y
            crear un entorno de trabajo adecuado.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>La importancia de crear tareas</SectionTitle>
          <Paragraph>
            Crear tareas es una manera efectiva de estructurar tu tiempo y
            asegurarte de que no se te escape nada importante. Un enfoque claro y
            organizado te permitirá avanzar hacia tus objetivos con mayor
            eficacia. <br />
            
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Citas inspiradoras</SectionTitle>
          <Quote>
            "La disciplina es el puente entre las metas y los logros."{" "}
            <QuoteAuthor>- Jim Rohn</QuoteAuthor>
          </Quote>
          <Quote>
            "El secreto de avanzar es comenzar. El secreto de comenzar es dividir tus complejas tareas abrumadoras en tareas pequeñas manejables, y luego comenzar con la primera." <QuoteAuthor>- Mark Twain</QuoteAuthor>
          </Quote>
          <Quote>
            "No intentes hacer todo a la vez. Tómate el tiempo para hacer una cosa bien y luego pasa a la siguiente." <QuoteAuthor>- Jordan B. Peterson</QuoteAuthor>
          </Quote>
        </Section>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Tips;
