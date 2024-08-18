import React from 'react';
import { FooterContainer, FooterContent, IconContainer, Icon,LogoMioContainer } from './FooterStyles';
import ReactIcon from '../../img/react.png';  
import MysqlIcon from '../../img/mysql.png';
import DockerIcon from '../../img/docker.png';
import NodeIcon from '../../img/nodejs.png';
import LogoMio from '../../img/LogoBlanco.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>Desarrollado con:</p>
        <IconContainer>
          <Icon src={ReactIcon} alt="React" />
          <Icon src={MysqlIcon} alt="MySQL" />
          <Icon src={DockerIcon} alt="Docker" />
          <Icon src={NodeIcon} alt="Dveader" />
        </IconContainer>
      </FooterContent>
      <LogoMioContainer>
          <img src={LogoMio} alt="Logo" />
      </LogoMioContainer>

    </FooterContainer>
  );
};

export default Footer;
