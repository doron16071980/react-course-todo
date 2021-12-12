
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
    Hello {firstName}
        </h1>
    )
}

Header.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
}