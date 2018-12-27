import React from 'react'

export default class SectionForm extends React.Component {
    render() {
        return (
            <div className={'form'}>
                <div className={'container'}>
                    <form>
                    <h1 className={'titleDecoration'}>Skontaktuj się z nami</h1>
                        <h4>Formularz kontaktowy</h4>
                        <div className="form-row">
                            <label htmlFor="message" className="visuallyhidden">Imię:</label>
                            <input className="form-control" type="text" name="name" id="name" placeholder="Imię:" />
                            <label htmlFor="email" className="visuallyhidden">Email:</label>
                            <input className="form-control" type="email" name="email" id="email" placeholder="Email:" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="message" className="visuallyhidden">Wiadomość:</label>
                            <input className="form-control" name="message" id="message" placeholder="Wiadomość:"/>
                        </div>
                        <div className="form-btn">
                            <button type="submit" className="btn">
                                Wyślij
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
