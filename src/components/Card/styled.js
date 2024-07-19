import styled from '@emotion/styled';

export const CardContainer = styled.div`
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const CardTitle = styled.h3`
align-items: center;
`

export const CardImage = styled.img`
width: 300px;
height: 300px;
`
export const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 8px;
`;

export const LikeButton = styled.button`
background: none;
border: none;
cursor: pointer;
padding: 8px;
display: flex;
align-items: center;
color: ${props => (props.isLiked ? 'red' : 'grey')};
  img {
    width: 24px;
    height: 24px;
    filter: ${props => (props.isLiked ? 'invert(23%) sepia(87%) saturate(7478%) hue-rotate(349deg) brightness(90%) contrast(101%)' : 'none')};
  }
`;

export const StyledButton = styled.button`
background: none;
border: none;
cursor: pointer;
padding: 8px;
display: flex;
align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
`;