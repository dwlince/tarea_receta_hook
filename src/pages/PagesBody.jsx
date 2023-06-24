import { useState, useEffect } from "react";
import FormRecetaComponent from "../components/FormRecetaComponent";
import RecetasItemComponent from "../components/RecetasItemComponent";

const PagesBody = () => {
    const [recetaCount, setRecetaCount] = useState(0);
    const [recetas, setRecetas] = useState([

    ]);
    const addReceta = (receta) => {

        setRecetas([...recetas, receta]);
    };
    useEffect(() => {
        setRecetaCount(recetas.length);
    }, [recetas]);
    return (
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 ">
            <FormRecetaComponent onSubmit={addReceta}></FormRecetaComponent>

            <ul role="list" className="divide-y divide-gray-100">
                {recetas.map((receta) => (
                    <RecetasItemComponent receta={receta} />
                ))}

            </ul>
        </div>
    )
}
export default PagesBody;