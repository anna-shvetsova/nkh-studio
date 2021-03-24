import { Link } from 'react-router-dom';
import { getHeading, getPath, getKey } from '../utils';
import './main-menu.css';

const MainMenu = ({ tasks }) => {

    const renderLink = (idx) => {
        return <Link key={getKey(idx)} className='nkh-link' to={getPath(idx)}>{getHeading(idx)}</Link>;
    };

    return (
        <section>
            {
                tasks.map((el, idx) => renderLink(idx))
            }
        </section>
    )
}

export default MainMenu;