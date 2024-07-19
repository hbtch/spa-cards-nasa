import { StyledButton } from './styled'

const Button = ({src, onClick, active, disabled, color}) => {
    return (
        <StyledButton onClick={onClick} active={active} disabled={disabled} color={color} >
            <img src={src} alt="icon" />
        </StyledButton>
    );
};

export default Button