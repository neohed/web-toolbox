import React from 'react';
import {
    Link
} from 'react-router-dom';

function RouterMenu() {
    return (
        <div className="menu">
            <h4>Click a link for tool</h4>
            <ul>
                <li>
                    <Link to="blur-image">Blur Image</Link>
                </li>
            </ul>
        </div>
    );
}

export default RouterMenu;
