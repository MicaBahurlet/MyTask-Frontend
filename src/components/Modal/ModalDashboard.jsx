
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  background: var( --btn-color);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var( --color-hover);
  }
`;

const MessageParagraph = styled.p`
  margin-bottom: 10px;
  font-size: 12px; 
  line-height: 1.5; 
`;

const Modal = ({ message, onClose }) => (
  <ModalOverlay>
    <ModalContent>
      {message}
      <CloseButton onClick={onClose}>Aceptar</CloseButton>
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
