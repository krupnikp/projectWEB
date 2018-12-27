import React from 'react'

export default class SectionInfo extends React.Component {
    render() {
        return (
            <div className={'section-info'}>
                <div className={'container'}>
                    <div className={'section-info-header'}>
                        <h1 className={'titleDecoration'}>Komu pomagamy?</h1>
                        <nav>
                            <button className={'btn'}>Fundacjom</button>
                            <button className={'btn'}>Organizacjom pozarządowym</button>
                            <button className={'btn'}>Lokalnym zbiórkom</button>
                        </nav>
                        <p>
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                    </div>
                    <div className={'info-section'}>
                        <div className={'info-left'}>
                            <p>
                                <span>Fundacja  “Dbam o Zdrowie”</span>
                                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                                <hr />
                            </p>
                            <p>
                                <span>Fundacja  “Dla dzieci”</span>
                                Cel i misja: Pomoc zieciom z ubogich rodzin.
                                <hr />
                            </p>
                            <p>
                                <span>Fundacja  “Bez domu”</span>
                                Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania
                                <hr />
                            </p>
                        </div>
                        <div className={'info-right'}>
                            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            <hr />
                            <p>ubrania, meble, zabawki</p>
                            <hr />
                            <p>ubrania, jedzenie, ciepłe koce</p>
                            <hr />
                        </div>
                    </div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        );
    }
}
