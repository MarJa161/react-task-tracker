import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title , onAdd, showForm}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            text='Add' 
            color={showForm ? '' : 'green'}
            onClick={onAdd}/>
        </header>
    );
};

Header.defaultProps = {
    title: 'tracker',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;