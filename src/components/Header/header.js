
import PropTypes from 'prop-types';

export function Header(

    {
firstName = 'guest',
lastName = ''
    }

)
{
    return (
        <h1>
    Hello to the react application
        </h1>
    )
}

Header.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
}