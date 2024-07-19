const fetchData = async () => {
  const url = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Ошибка HTTP ' + response.status);
    }

    const data = await response.json();
    console.log('Данные из NASA Image API:', data);

    const galaxies = data.collection.items.map((item, index) => ({
      id: index + 1,
      title: item.data[0].title,
      url: item.links[0].href,
    }));

    return galaxies;
  } catch (error) {
    console.error('Ошибка при получении данных из NASA Image API:', error);
    throw error;
  }
};

export { fetchData };
