import { HeaderContainer, FilterButton, Title } from './styled';

const Header = ({ children, filterLiked, toggleFilterLiked }) => {
    return (
    <HeaderContainer>
        <Title>{children}</Title>
        <FilterButton onClick={toggleFilterLiked}>
        {filterLiked ? 'Показать все' : 'Показать лайкнутые'}
        </FilterButton>
    </HeaderContainer>
    );
};

export default Header