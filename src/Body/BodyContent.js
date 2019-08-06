import React, { Component } from 'react';

class BodyData extends Component {
    state = {
        query: '',
        data: [],
        filteredData: []
    };

    handleInputChange = event => {
        const query = event.target.value;

        this.setState({
            query
        });
        this.getData(query);

        // this.setState(prevState => {
        //     const filteredData = prevState.data.filter(element => {
        //         return element.name.toLowerCase().includes(query.toLowerCase());
        //     });

        //     return {
        //         query,
        //         filteredData
        //     };
        // });
    };

    getData = query => {
        // can I componentDidMount ?
        fetch(`https://swapi.co/api/people/?search=${query}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.results.filter(element => {
                    return element.name.toLowerCase().includes(query.toLowerCase());
                });

                this.setState({
                    data,
                    filteredData
                });
            });
    };

    componentDidMount() {
        //Is this needed ?
        this.getData();
    }

    render() {
        return (
            <div className="searchForm">
                <form>
                    <input
                        placeholder="Search for start wars cha...."
                        value={this.state.query}
                        onChange={this.handleInputChange}
                    />
                </form>
                <div>
                    {this.state.filteredData.map(i => (
                        <p>{i.name}</p>
                    ))}
                </div>
            </div>
        );
    }
}
export default BodyData;
