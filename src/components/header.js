const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

//Default Props
Header.defaultProps = {
    title: "Indecision"
}


export default Header;