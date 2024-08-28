import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { fetchData }  from '../../Store/store'
import { HomepageContainer, CardsGrid } from './styled';

const HomePage = () => {
//этот хук позволяет хранить данные о галактиках, которые будут закгружены из API
    const [galaxies, setGalaxies] = useState([])
    const [likedGalaxies, setLikedGalaxies] = useState(new Set());
    const [filterLiked, setFilterLiked] = useState(false);
//используем useEffect для загрузки данных
    useEffect(() => {
    const fetchGalaxies = async () => {
      try {
        const data = await fetchData();
        setGalaxies(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных из API NASA APOD:', error);
      }
    };

    fetchGalaxies();
  }, []);

//добавляем обработчики событий для кнопок
    const handleLike = (id) => {
      setLikedGalaxies((prevLikedGalaxies) => {
        const updatedLikedGalaxies = new Set(prevLikedGalaxies);
        if (updatedLikedGalaxies.has(id)) {
          updatedLikedGalaxies.delete(id);
        } else {
          updatedLikedGalaxies.add(id);
        }
        return updatedLikedGalaxies;
      });
    };

//фильтрует массив galaxies, удаляя элемент с указанным id и обновляет состояние 
    const handleDelete = (id) => {
        setGalaxies(galaxies.filter(galaxy => galaxy.id !== id));
        setLikedGalaxies((prevLikedGalaxies) => {
          const updatedLikedGalaxies = new Set(prevLikedGalaxies);
          updatedLikedGalaxies.delete(id);
          return updatedLikedGalaxies;
        });
    };
    const toggleFilterLiked = () => {
      setFilterLiked(!filterLiked);
    };
    const displayedGalaxies = filterLiked
    ? galaxies.filter(galaxy => likedGalaxies.has(galaxy.id))
    : galaxies.slice(0, 8);
    return (
        <HomepageContainer>
            <Header filterLiked={filterLiked} toggleFilterLiked={toggleFilterLiked}>Галактики NASA</Header>
      <CardsGrid>
        {displayedGalaxies.map((galaxy) => (
          <Card
            key={galaxy.id}
            imageUrl={galaxy.url}
            title={galaxy.title}
            onLike={() => handleLike(galaxy.id)}
            onDelete={() => handleDelete(galaxy.id)}
            isLiked={likedGalaxies.has(galaxy.id)}
          />
        ))}
      </CardsGrid>
        </HomepageContainer>
    )
}

export default HomePage