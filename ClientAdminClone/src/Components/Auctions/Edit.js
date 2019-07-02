import React from 'react';
export function Edit({match})
{
    return (
        <h1>edycja zbiorki {match.params.id}</h1>
    )
}