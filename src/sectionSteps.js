import React from 'react'

export default class Section extends React.Component {
    render() {
        return (
            <div className={'section-steps'}>
                <div className={'container'}>
                    <h1 className={'section-steps-title'}>Wystarczą 4 proste kroki</h1>
                    <div className={'steps-row'}>
                        <div className={'col-1-4'}>
                            <img id={'img28'}/>
                            <h3>Wybierz rzeczy</h3>
                            <hr />
                            <p>ubrania, zabawki,<br />
                                sprzęt i inne</p>
                        </div>
                        <div className={'col-1-4'}>
                            <img id={'img016'}/>
                            <h3>Spakuj je</h3>
                            <hr />
                            <p>skorzystaj z worków<br />
                                na śmieci</p>
                        </div>
                        <div className={'col-1-4'}>
                            <img id={'img39'}/>
                            <h3>Zdecyduj komu<br/>chcesz pomóc</h3>
                            <hr />
                            <p>wybierz  zaufane<br />
                                miejsce</p>
                        </div>
                        <div className={'col-1-4'}>
                            <img id={'img58'}/>
                            <h3>Zamów kuriera</h3>
                            <hr />
                            <p>kurier przyjedzie<br />
                                w dogodnym terminie</p>
                        </div>
                    </div>
                    <button className={'btn'}>załóż konto</button>
                </div>
            </div>
        );
    }
}
