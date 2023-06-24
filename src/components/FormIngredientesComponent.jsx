
import IngredientesComponent from "./IngredientesComponent";
const FormIngredientesComponent = ({ onSubmit }) => {
    const submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const inputIngrediente = form[0].value;
        const ingredienteObj = { inputIngrediente };
        onSubmit(ingredienteObj);
        form.reset();
    };
    return (<div className="-ml-4 -mt-4 items-center sm:flex-nowrap ">
        <form onSubmit={submit}>
            <div className="ml-4 mt-4">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Agregar nuevo ingrediente</h3>
                <div className="mt-1 text-sm text-gray-500">
                    <div className="sm:col-span-4">
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="inputIngrediente"
                                    id="inputIngrediente"
                                    autoComplete="inputIngrediente"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Ingrediente"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
                <button
                    type="submit"
                    className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Agregar ingrediente
                </button>
            </div>
        </form>
        
       
        
    </div>);
}
export default FormIngredientesComponent;