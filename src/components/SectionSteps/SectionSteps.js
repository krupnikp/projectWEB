import React from 'react'
import './SectionSteps.scss';
import img28 from '../../img/icons/28.png'
import img39 from '../../img/icons/39.png'
import img58 from '../../img/icons/58.png'
import img016 from '../../img/icons/016.png'

export default class SectionSteps extends React.Component {
    render() {
        return (
            <div id={'sectionSteps'} className={'section-steps'}>
                <div className={'container'}>
                    <h1 className={'titleDecoration'}>Wystarczą 4 proste kroki</h1>
                    <div className={'steps-row'}>
                        <div className={'col-1-4'}>
                            <img src={img28}/>
                            <h3>Wybierz rzeczy</h3>
                            <hr />
                            <p>ubrania, zabawki,<br />
                                sprzęt i inne</p>
                        </div>
                        <div className={'col-1-4'}>
                            <img src={img016}/>
                            <h3>Spakuj je</h3>
                            <hr />
                            <p>skorzystaj z worków<br />
                                na śmieci</p>
                        </div>
                        <div className={'col-1-4'}>
                            <img src={img39}/>
                            <h3>Zdecyduj komu<br/>chcesz pomóc</h3>
                            <hr />
                            <p>wybierz  zaufane<br />
                                miejsce</p>
                        </div>
                        <div className={'col-1-4'}>
                            <img src={img58}/>
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
