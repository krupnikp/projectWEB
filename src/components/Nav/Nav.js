import React from 'react'

export default class Nav extends React.Component {
    render() {
        return (
            <ul className={'header-nav'}>
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacje i organizacje</li>
                <li>Kontakt</li>
            </ul>
        );
    }
}
