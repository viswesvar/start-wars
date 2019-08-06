import React from 'react';

class Header extends React.Component {
    state = {
        content: [{ searchPars: 'any' }]
    };
    render() {
        return (
            <div className="HeaderContent">
                <h1>
                    Welcome to the {this.props.type} character wiki, search for {this.state.content[0].searchPars}{' '}
                    {this.props.type} characters
                </h1>
                <p>Type and search your favourite characters</p>
            </div>
        );
    }
}

export default Header;
