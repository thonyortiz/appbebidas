import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

//Crear  el context y de paso toca crear un provider que es quien hara la referencia al context
export const CategoriasContext = createContext();

//provider: es donde se encuentran las funciones y states
const CategoriasProvider = (props) => {
	// creando el state del Context
	const [categorias, guardarCategorias] = useState([]);

	//ejecutar el llamdo a la api
	useEffect(() => {
		const obtenerCategorias = async () => {
			const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

			const categorias = await axios.get(url);
			guardarCategorias(categorias.data.drinks);
		};
		obtenerCategorias();
	}, []);

	return (
		<CategoriasContext.Provider value={{ categorias }}>
			{props.children}
		</CategoriasContext.Provider>
	);
};
export default CategoriasProvider;
