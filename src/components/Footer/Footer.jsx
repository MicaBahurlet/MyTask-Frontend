import React from 'react';
import { FooterContainer, FooterContent, IconContainer, Icon } from './FooterStyles';
// import ReactIcon from '../../img/react-icon.png';  
// import MysqlIcon from '../../img/mysql-icon.png';
// import DockerIcon from '../../img/docker-icon.png';
// import DveaderIcon from '../../img/dveader-icon.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>Desarrollado con:</p>
        {/* <IconContainer>
          <Icon src={ReactIcon} alt="React" />
          <Icon src={MysqlIcon} alt="MySQL" />
          <Icon src={DockerIcon} alt="Docker" />
          <Icon src={DveaderIcon} alt="Dveader" />
        </IconContainer> */}
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
