import React from 'react'
import Nav from './nav.js'

export default class Header extends React.Component {
    render() {
        return (
            <div className={'header'}>
                <div className={'container'}>
                    <div className={'header-user'}>
                        <div className={'header-user-login'}>Zaloguj</div>
                        <div className={'header-user-register'}>Załóż konto</div>
                    </div>
                    <Nav />
                    <div className={'header-text'}>
                        <span>Zacznij pomagać! <br/></span>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </div>
                    <div className={'header-btns'}>
                        <button className={'btn'}><p>ODDAJ<br/>RZECZ</p></button>
                        <button className={'btn'}><p>ZORGANIZUJ ZBIÓRKĘ</p></button>
                    </div>
                </div>
            </div>
        );
    }
}
