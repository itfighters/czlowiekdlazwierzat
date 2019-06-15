import React from 'react'

export default function Loader({ visible }) {
    if (!visible) { return null; }
    return <div className="loader">
    </div>
}