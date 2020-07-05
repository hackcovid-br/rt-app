import Arrow from 'components/Arrow';
import { Link } from 'gatsby';
import React from 'react';
import './NavigationButton.scss';

export default function NavigationButton({ label, arrow, to }) {
    return (
        <button className="navigation-button">
            <Link to={to}>{label}</Link>
            <Arrow />
        </button>
    )
}