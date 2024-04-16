const Tabs = ({ children, buttons, ButtonContainer }) => {
    // const ButtonsContainer = buttonsContainer -> Only if the props start with lowerCase letter
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    )
}

export default Tabs
