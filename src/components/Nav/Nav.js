import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Nav extends React.Component {
    render() {
        return (
            <ul className={'header-nav'}>
                <li>Start</li>
                <li><Link
                    activeClass="active"
                    to="sectionSteps"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >O co chodzi?</Link></li>
                <li><Link
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >O nas</Link></li>
                <li><Link
                    activeClass="active"
                    to="sectionInfo"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Fundacje i organizacje</Link></li>
                <li><Link
                    activeClass="active"
                    to="sectionForm"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Kontakt</Link></li>
            </ul>
        );
    }
}
