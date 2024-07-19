import styled from '@emotion/styled';

export const StyledButton = styled.button`
background: none;
border: none;
cursor: pointer;
padding: 8px; 
display: flex;
align-items: center;
justify-content: center; 
    img {
        width: 24px;
        height: 24px;
        transition: transform 0.2s ease-in-out; 
        &:hover {
        transform: scale(1.1); 
        }
    }
`;
