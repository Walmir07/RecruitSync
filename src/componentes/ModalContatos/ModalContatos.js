'use client'
import './ModalContatos.css'
import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '60%',
    width: '50%',
    marginRight: '-50%',
    backgroundColor: '#30363D',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ModalContatos() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const subtitleRef = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#000000';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='btn-open-modal' onClick={openModal}>Contatos</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={subtitleRef}>Contatos:</h2>
        <br></br>
        <p>Para mais informações você pode colsultar nossos desenvolvedores:</p>
        <ul className='lista-contatos'>
           <li><p>Email: walmir.lima@academico.ifpb.edu.br</p></li>
           <li><p>Email: espedito.jose@academico.ifpb.edu.br</p></li>
           <li><p>Email: heloisa.oliveira@academico.ifpb.edu.br</p></li>
           <li><p>Email: itallo.nathan@academico.ifpb.edu.br</p></li>
        </ul>
        <div className='area-close'>
          <button className="btn-close-modal" onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
}