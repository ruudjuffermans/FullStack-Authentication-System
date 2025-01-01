import React, { useContext } from 'react';
import { Link as RRDLink, NavLink as RRDNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// @todo
const AuthContext = React.createContext();
const ModalContext = React.createContext();

const Link = ({ to, children, navLink, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const { openModal } = useContext(ModalContext);

    const handleClick = (event) => {
        if (!isLoggedIn) {
            event.preventDefault(); // Prevent navigation
            openModal({
                title: 'Login Required',
                message: 'You must log in to access this page.',
                onConfirm: () => window.location.href = '/login',
            });
        }
    };

    // Use NavLink if navLink prop is true, otherwise use Link
    const Component = navLink ? RRDNavLink : RRDLink;

    return (
        <Component to={to} onClick={handleClick} {...rest}>
            {children}
        </Component>
    );
};

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    navLink: PropTypes.bool,
};

Link.defaultProps = {
    navLink: false,
};

export default Link