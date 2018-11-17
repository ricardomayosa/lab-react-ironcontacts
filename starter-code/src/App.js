import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import NewContacts from './Components/NewContacts';

class App extends Component {
	constructor() {
		super();
		this.state = {
            contactS: [],
            contac:contacts
		};
    }

    componentWillMount(){
        //llamar a nuestras elementos del state
        let {contac,contactS}= this.state;

        //insertar los primeros 5 a nuestro array ContactS
        contactS = contac.splice(0,5)
        //setear el nuevo contactS para que se vean los cambios
        this.setState({contactS})
        //este nada mas es un console para ver si si hay 5 
        console.log("tengo algo",contactS)

    }
    


    //esta funcion es para general uno random 
    handleClick = () => {

        //llamanos a contactS para poderle hace un push al final
        let{contactS}=this.state;
        console.log("original",contactS)
        // creamos esta variable para quitar los primeros 5 del arreglo original
        let remaining = this.state.contac.slice(5);
        //esta variable es el elemento random que se agrega a contactS
        let item = remaining[Math.floor(Math.random()*remaining.length)];
        console.log("nuvo",item);
        //se hace un push a contactS
        contactS.push(item)
        //contactS=item

        //seteamos para reflejar cambios
        this.setState({contactS});
        
	};

	render() {
		return (
			<div className="App">
            <button onClick={this.handleClick}>Add Random Contact</button>
            <button>Sort by Name</button>
            <button>Sort by Popularity</button>
				<table>
					<tbody>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
						</tr>

						{this.state.contactS.map((item, index) => (
							
                            <tr key={index}>
                                <td><img src={item.pictureUrl} alt=""/></td>
                                <td>{item.name}</td>
                                <td>{item.popularity}</td>
                            </tr>
                        ))}
                        
						
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
