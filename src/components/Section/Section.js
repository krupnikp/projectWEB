import React from 'react'

export default class Section extends React.Component {
    render() {
        return (
            <div className='section'>
                <div className='container'>
                    <div className='col-1-3'>
                        <p className='numbers'>10</p>
                        <h2 className='numbers-name'>Oddanych worków</h2>
                        <div className='numbers-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi culpa deserunt do</div>
                    </div>
                    <div className={'col-1-3'}>
                        <p className={'numbers'}>5</p>
                        <h2 className={'numbers-name'}>Wspartych organizacji</h2>
                        <div className={'numbers-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis enim minima sequi,</div>
                    </div>
                    <div className={'col-1-3'}>
                        <p className={'numbers'}>7</p>
                        <h2 className={'numbers-name'}>zorganizowanych zbiórek</h2>
                        <div className={'numbers-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus eveni</div>
                    </div>
                </div>
            </div>
        );
    }
}
