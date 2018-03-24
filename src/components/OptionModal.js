import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        <p>Anka PRVO mora da uci, a posle moze</p><br/>
        {props.selectedOption && <p className="modal__body">{props.selectedOption === "Clubbing" ? "Anka ne moze da Clubbinuje!" : props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearOption} >Okey</button>
    </Modal>
);

export default OptionModal;