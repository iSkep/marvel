import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
    const { getCharacter, clearError, process, setProcess } = useMarvelService();
    const [char, setChar] = useState({});

    useEffect(() => {
        updateChar();
        // const timerId = setInterval(updateChar, 60000);

        // return () => {
        //     clearInterval(timerId)
        // }

        // eslint-disable-next-line
    }, []);

    const onCharLoaded = (char) => {
        setChar(char);
    };

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    };

    return (
        <div className="randomchar">
            <div className="randomchar__block">{setContent(process, View, char)}</div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!
                    <br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">Or choose another one</p>
                <button className="button button__main" onClick={updateChar} disabled={process === 'loading'}>
                    try it
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    );
};

const View = ({ data }) => {
    const { name, description, thumbnail, homepage, wiki } = data;
    let imgStyle = { objectFit: 'cover' };
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { objectFit: 'contain' };
    }

    return (
        <>
            <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle} />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">{description}</p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        Homepage
                    </a>
                    <a href={wiki} className="button button__secondary">
                        Wiki
                    </a>
                </div>
            </div>
        </>
    );
};

export default RandomChar;
