import React, {Component} from "react";

export default class App extends Component{
    state = {
        numero: 0
    };

    aumentar = () => {
        if (this.state.numero < 10) {
                this.setState({
                    numero: this.state.numero + 1
                });
            }

    }
    diminuir = () => {
        if (this.state.numero > 0){
                this.setState({
                    numero: this.state.numero - 1
                });
        }
    }
        

    render() {
        return (
            <div>
                <h1>Trabalho Contador</h1>
                <h2>{this.state.numero}</h2>
                <button onClick={this.aumentar}>+</button>
                <button onClick={this.diminuir}>-</button>
            </div>
        );
    }
}