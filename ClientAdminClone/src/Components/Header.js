import React from 'react';
import { Button } from 'semantic-ui-react';
import { authTokenKey } from '../Utils/auth';
export function Header()
{
    function logout()
    {
        localStorage.removeItem(authTokenKey);
        window.location.href = '/login';
    }

    return (
        <div className="ui menu menu-container">
            <div className="left">
                <div className="header item">
                    Panel administracyjny
            </div>
                <a className="item" href="/admin/list">
                    Zbiórki
                </a>
                <a className="item" href="/admin/categories">
                    Kategorie
                </a>
            </div>
            <div className="right">
                <Button primary onClick={() => logout()}>Wyloguj</Button>
            </div>

        </div>
    )
}