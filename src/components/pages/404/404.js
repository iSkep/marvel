import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './404.scss';
import captainMarvel from '../../../resources/img/captain-marvel.png';

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Marvel information portal" />
                <title>Marvel information portal</title>
            </Helmet>
            <div className="error-page">
                <div className="error-page__text">
                    <h1 className="error-page__header">404 Page Not Found</h1>
                    <h2 className="error-page__subheader">
                        HYDRA has stolen this page from the S.H.I.E.L.D. database!
                    </h2>
                    <p className="error-page__desc">
                        Check that you typed the address correctly or go back to your previous page.
                    </p>
                    <Link to="/" className="error-page__link">
                        Back to main page
                    </Link>
                </div>
                <div className="error-page__image">
                    <img src={captainMarvel} alt="Captain Marvel" />
                </div>
            </div>
        </div>
    );
};

export default Page404;
