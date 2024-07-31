import React from 'react';

import styles from './Nav.css'
import { ChevronDown } from 'react-feather';

export function Nav() {
    return (
        <div className="Nav">
            <span>Admin <ChevronDown /></span>
        </div>
    )
};