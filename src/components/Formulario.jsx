import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
	const [busqueda, guardarBusqueda] = useState({
		nombre: '',
		categoria: '',
	});

	const { categorias } = useContext(CategoriasContext);
	const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

	//creando una funcion para leer los contenidos sobre el state
	const obtenerDatosReceta = (e) => {
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<form
			className="col-12"
			onSubmit={(e) => {
				e.preventDefault();
				buscarRecetas(busqueda);
				guardarConsultar(true);
			}}
		>
			<fieldset className="text-center">
				<legend>Busca bebidas por categoria o por Ingredientes</legend>
			</fieldset>

			<div className="row mt-4">
				<div className="col-md-4">
					<input
						name="nombre"
						className="form-control"
						type="text"
						placeholder="buscar por ingrediente"
						onChange={obtenerDatosReceta}
					/>
				</div>

				<div className="col-md-4">
					<select
						className="form-control"
						name="categoria"
						onChange={obtenerDatosReceta}
					>
						<option value=" ">-Seleccione Categoria</option>
						{categorias.map((categoria) => (
							<option key={categoria.strCategory} value={categoria.strCategory}>
								{categoria.strCategory}
							</option>
						))}
					</select>
				</div>

				<div>
					<input
						type="submit"
						className="btn btn-block btn-primary"
						value="Buscar bebida"
					/>
				</div>
			</div>
		</form>
	);
};

export default Formulario;
