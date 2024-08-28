import styled from '@emotion/styled';

export const HomepageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: linear-gradient(120deg, #1d1d29, #302b63, #24243e);
width: 100%;
min-height: 100vh; 
background-size: cover;
background-position: center;
margin: 0;
padding: 0;
`;

export const CardsGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
`;