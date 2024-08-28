import styled from '@emotion/styled'

export const HeaderContainer =  styled.div`
font-size: 30px;
font-weight: bold;
text-align: center
`
export const Title = styled.h1`
margin-bottom: 16px;
font-size: 26px;
background: linear-gradient(90deg, #ff6ec4, #7873f5);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 3s ease infinite;
  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const FilterButton = styled.button`
background: linear-gradient(45deg, #ff6ec4, #7873f5);
color: white;
border: none;
border-radius: 8px;
padding: 10px 20px;
cursor: pointer;
font-size: 16px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
transition: background 0.3s, transform 0.3s;

&:hover {
background: linear-gradient(45deg, #7873f5, #ff6ec4);
transform: translateY(-2px);
}
`;