import React from 'react';

export function Header() {
    return (
        <div className="ui menu">
            <div className="header item">
                Panel administracyjny
  </div>
            <a className="item" href="/admin/list">
                Zbiórki
  </a>
            <a className="item" href="/admin/notifications">
                Notyfikacje
  </a>
        </div>
    )
}