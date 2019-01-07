import React from 'react'
import Nav from '../Nav/Nav'

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
                    <h1 className={'titleDecoration header-text'}>
                        Zacznij pomagać! <br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <div className={'header-btns'}>
                        <button className={'btn'}><p>ODDAJ<br/>RZECZ</p></button>
                        <button className={'btn'}><p>ZORGANIZUJ ZBIÓRKĘ</p></button>
                    </div>
                </div>
            </div>
        );
    }
}
