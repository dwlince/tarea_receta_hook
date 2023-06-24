import { useState, useEffect } from "react";
import FormIngredientesComponent from "./FormIngredientesComponent";
import IngredientesComponent from "./IngredientesComponent";

const RecetasItemComponent = ({ receta }) => {
    const { nombre_receta, tiempo_preparacion } = receta;


    const [ingredientes, setIngredientes] = useState([

    ]);
    const addIngrediente = (ingrediente) => {

        setIngredientes([...ingredientes, ingrediente]);
    };
    useEffect(() => {

    }, [ingredientes]);

    return (
        <li className="flex gap-x-4 py-5">
            <div className="flex-auto">
                <div className="flex items-baseline justify-between gap-x-4">
                    <p className="text-sm font-semibold leading-6 text-gray-900">Nombre receta: {nombre_receta}</p>
                </div>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">Tiempo de preparación de la receta: {tiempo_preparacion}min</p>
                <FormIngredientesComponent onSubmit={addIngrediente}></FormIngredientesComponent>
                <strong>Lista de Ingredientes:</strong>
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {ingredientes.map((ingrediente) => (
                        <IngredientesComponent ingrediente={ingrediente} ></IngredientesComponent>
                    ))}
                </ul>
            </div>
        </li>
    );
};
export default RecetasItemComponent;