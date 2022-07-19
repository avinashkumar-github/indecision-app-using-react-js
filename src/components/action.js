import OptionModal from "./optionModal";

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleAction} disabled={!props.hasOptions}>This is a Action component</button>
            <OptionModal modalMessage={props.modalMessage} closeOptionModal={props.closeOptionModal} isStateModal={props.isStateModal}/>
        </div>
    );
}

export default Action;