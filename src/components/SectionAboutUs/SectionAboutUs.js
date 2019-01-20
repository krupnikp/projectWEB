import React from 'react'
import about from '../../img/about.jpg'
import signature from '../../img/icons/Signature.png'

export default class SectionAboutUs extends React.Component {
    render() {
        return (
            <div id={'aboutUs'} className={'section-AboutUs'}>
                <div className={'container'}>
                    <div className={'section-AboutUs-box'}>
                        <h1 className={'titleDecoration'}>O nas</h1>
                        <p className={'section-AboutUs-text'}>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img id={'imgSignature'} src={signature} />
                    </div>
                    <img id={'imgAbout'} src={about} />
                </div>
            </div>
        );
    }
}
