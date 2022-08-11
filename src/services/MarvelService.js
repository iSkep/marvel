import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, error, request, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = '72f30f62fcb72101fad07360124cb93c';
    const _baseCharactersOffset = 306;
    const _baseComicsOffset = 10;

    const getAllCharacters = async (offset = _baseCharactersOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseComicsOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&apikey=${_apiKey}`);
        return res.data.results.map(_transformComic);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?apikey=${_apiKey}`);
        return _transformComic(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 200)}...` : 'No description',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComic = (comic) => {
        return {
            id: comic.id,
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            title: comic.title,
            price: comic.prices.price ? `${comic.prices.price}$` : 'not available',
            description: comic.description || 'There is no description',
            pageCount: comic.pageCount ? `${comic.pageCount} p.` : 'No information about the number of pages',
            language: comic.textObjects.language || 'en-us'
        }
    }

    return {loading, error, getCharacter, getAllCharacters, getComic, getAllComics, clearError};
}

export default useMarvelService;








