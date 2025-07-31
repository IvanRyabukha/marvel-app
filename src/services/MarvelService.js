import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = 'https://marvel-server-zeta.vercel.app/';
  const _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df';
  const _baseOffset = 0;


  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
  
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    
    return _transformCharacter(res.data.results[0]);
  };

 const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description ? `${char.description.length > 210 ? char.description.slice(0, 210) + '...' : char.description}` : `Character doesn't have description :(`,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items.slice(0, 10),
    }
  };

  const getAllComics = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
  
    return res.data.results.map(_transformComics);
  };

  const getComics = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);

    return _transformComics(res.data.results[0]);
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || "There is no description",
      pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
      price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
      language: comics.textObjects[0]?.languages || 'en-us',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
    };
  };

  return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics };
};

export default useMarvelService;