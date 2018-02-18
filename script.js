var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button',{onClick: this.increment}),
            React.createElement('button',{onClick: this.decrement}),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element =
    React.createElement('div', {},
        React.createElement(Counter, {}, ),
        React.createElement(Counter, {}, ),
        React.createElement(Counter, {}, ) 
    );

// componentWillMount(); {
//     console.log('WillMount');
// }
// componentDidMount(); {
//     console.log('DidMount');
// }
// componentWillReceiveProps(); {
//     console.log('WillReceivePropst');
// }
// shouldComponentUpdate(); {
//     console.log('componentUpdate')
//         // return true;
// }
// componentWillUpdate(); {
//     console.log('WillUpdate');
// }
// componentDidUpdate(); {
//     console.log('DidUpdate');
// }
// componentWillUnmountn(); {
//     console.log('WillUnmount');
// }




ReactDOM.render(element, document.getElementById('app'));