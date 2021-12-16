import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../../context/Store/StoreContext';

const Stores = () => {
    //Estado Global
    const ctx = useContext(StoreContext);
    //console.log(ctx) //{guitars: Array(0), hola: 'mundo'}

    const { stores, hola, changeText, getStores } = ctx; //<-- destruccturacion

    //Estado Local
    //el momento que se ejecuta el useEffect es despues del return del componente,
    //es despues del render
    useEffect(() => {
        getStores();
    }, []); //cuando hay un arreglo vacio significa que va a ejecutarse 1 sola vez

    return (
        <>
            <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Listado de Tiendas
                        </h2>
                    </div>
                    <div class="mt-4 flex md:mt-0">
                        <Link to="/tiendas/crear">
                            <button
                                type="button"
                                class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Crear tienda
                            </button>
                        </Link>
                    </div>
                </div>

                <div class="bg-white">
                    <div>
                        <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {stores.map(element => {
                                return (
                                    <>
                                        <div class="">
                                            <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                                <Link
                                                    to={`/tiendas/${element._id}`}
                                                >
                                                </Link>
                                            </div>
                                            <div class="pt-10 pb-4 text-center">
                                                <h3 class="text-sm font-medium text-gray-900">
                                                    <Link
                                                        to={`/tiendas/${element._id}`}
                                                    >
                                                        {element.domicilio}
                                                    </Link>
                                                </h3>
                                                <div class="mt-3 flex flex-col items-center">
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        {element.telefono}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stores;

//https://www.musisol.com/blog/wp-content/uploads/2019/06/ibanez-guitarra-electroacustica-pf15ece-tbs-azul1.png
