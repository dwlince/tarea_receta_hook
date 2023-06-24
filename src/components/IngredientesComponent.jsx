
const IngredientesComponent = ({ ingrediente }) => {
    const { inputIngrediente } = ingrediente;



    return (
        <li className="flex gap-x-4 py-5">
            <div className="flex-auto">
                <div className="flex items-baseline justify-between gap-x-4">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{inputIngrediente}</p>
                </div>
            </div>
        </li>
    );
};
export default IngredientesComponent;