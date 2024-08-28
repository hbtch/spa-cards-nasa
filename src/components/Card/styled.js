import styled from '@emotion/styled';

export const CardContainer = styled.div`
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Более глубокая тень для эффекта подъема */
  border-radius: 12px; /* Закругленные углы */
  overflow: hidden; /* Прячем части изображения, выходящие за пределы контейнера */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Плавные переходы для эффектов при наведении */
  
  &:hover {
    transform: translateY(-8px); /* Поднимает карточку при наведении */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Увеличивает тень при наведении */
  }
`

export const CardTitle = styled.h3`
text-align: center;
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
`
export const CardImage = styled.img`
width: 300px;
height: 300px;

&:hover {
  transform: scale(1.05); /* Легкий увеличительный эффект при наведении */
}
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
background: linear-gradient(90deg, #ff6ec4, #7873f5);
border-radius: 8px; 
transition: background 0.3s ease, transform 0.2s ease; 
background: ${props => (props.isLiked ? '#9c27b0' : 'linear-gradient(90deg, #ff6ec4, #7873f5)')}; /* Фиолетовый цвет для состояния лайка */
  img {
    width: 24px;
    height: 24px;
    
  }
&:hover {
  background: linear-gradient(90deg, #e91e63, #6a5acd); 
  transform: scale(1.05); 
}
`;

export const StyledButton = styled.button`
background: none;
border: none;
cursor: pointer;
padding: 8px;
display: flex;
align-items: center;
background: linear-gradient(90deg, #ff6ec4, #7873f5);
border-radius: 8px; 
transition: background 0.3s ease, transform 0.2s ease;
  img {
    width: 24px;
    height: 24px;
  }
&:hover {
  background: linear-gradient(90deg, #e91e63, #6a5acd); 
  transform: scale(1.05); 
}
`;