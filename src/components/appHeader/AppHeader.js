import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    const setActive = ({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' });

    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink end style={setActive} to="/">
                            Characters
                        </NavLink>
                    </li>
                    <span>/</span>
                    <li>
                        <NavLink style={setActive} to="/comics">
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;
