const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleAction} disabled={!props.hasOptions}>This is a Action component</button>
        </div>
    );
}

export default Action;