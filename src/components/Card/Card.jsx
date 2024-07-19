import { CardContainer, ButtonContainer, CardImage, CardTitle, LikeButton, StyledButton } from './styled'

const Card = ({imageUrl, title, onLike, onDelete, isLiked}) => {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardImage src={imageUrl} alt={title} />
            <ButtonContainer>
                <LikeButton onClick={onLike} isLiked={isLiked}>
                <img src="/spa-cards-nasa/like.svg" alt="like" />
                </LikeButton>
                <StyledButton onClick={onDelete}>
                <img src="/spa-cards-nasa/trash.svg" alt="delete" />
                </StyledButton>
            </ButtonContainer>
        </CardContainer>
    )
}
export default Card