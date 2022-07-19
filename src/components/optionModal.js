import Modal from "react-modal";

Modal.setAppElement('#root');

const OptionModal = (props) => {
    return (
        <Modal isOpen={props.isStateModal} onRequestClose={props.closeOptionModal}>
            <div>
                <h1>Title</h1>
                {props.modalMessage}
            </div>
        </Modal>
    )
}

export default OptionModal