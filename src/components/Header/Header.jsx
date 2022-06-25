import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.css';

export default function Header({ handleRefreshData, isDisableButton }) {
    const location = useLocation();
    const hasSearchQuery = location?.search;

    return (
        <header className="header">
            <nav>
                {hasSearchQuery ? (
                    <Link className="header__logo" to="/stories">
                        <b>HackerNews</b>
                    </Link>
                ) : (
                    <b>HackerNews</b>
                )}
                <Button isDisabled={isDisableButton} label="Refresh data" handleButton={handleRefreshData} />
            </nav>
        </header>
    );
}

Header.defaultProps = {
    isDisableButton: false,
    handleRefreshData: () => null,
};

Header.propTypes = {
    isDisableButton: PropTypes.bool,
    handleRefreshData: PropTypes.func,
};
