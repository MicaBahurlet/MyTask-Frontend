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
  max-width: 400px;
  width: 100%;
  gap: 1rem;
`;

const CloseButton = styled.button`
  background:var(--btn-color);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
  font-family: var(--primary-font);
  margin-top: 1rem;
  font-weight: 600;
  font-size: medium;

  &:hover {
    background-color: var(--color-hover);
  }
`;

const Modal = ({ message, onClose }) => (
  <ModalOverlay>
    <ModalContent>
      <h2>{message}</h2>
      <CloseButton onClick={onClose}>Aceptar</CloseButton>
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
