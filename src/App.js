import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer/Footer';
import Body from './Body/BodyContent';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header type="star wars" />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;
