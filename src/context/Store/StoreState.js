// ./client/src/context/Guitar/GuitarState.js

// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from 'react';


import StoreReducer  from './StoreReducer'

import axiosClient from './../../config/axios';
import StoreContext from './StoreContext';

const StoreState = props => {
    // 1. INITIAL STATE (ESTADO INICIAL)
    const initialState = {
        stores: [],
        singleStore: {
            _id: '',
            domicilio: '',
            telefono: '',
        },
        hola: 'mundo',
    };

    // 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
    // REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
    const [globalState, dispatch] = useReducer(StoreReducer, initialState);

    // 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
    const changeText = () => {
        dispatch({
            // ESTE OBJETO SE LE CONOCE COMO ACTION
            type: 'CHANGE_TEXT',
            payload: 'Estoy aprendiendo Context sin morir.',
        });
    };

    const getStores = async () => {
        const res = await axiosClient.get('stores/readall');

        console.log('Obteniendo tiendas...');

        const list = res.data.data;
        console.log(list)
        dispatch({
            type: 'GET_STORES',
            payload: list,
        });
    };

    const getStore = async storeId => {
        console.log(storeId);

        const res = await axiosClient.get(`stores/readone/${storeId}`);

        console.log(res);

        const selectedStore = res.data.data;

        dispatch({
            type: 'GET_STORE',
            payload: selectedStore,
        });
    };

    const createStore = async form => {
        const res = await axiosClient.post('stores/create', form);

        console.log(res);
    };

    const updateStore = async (form, idStore) => {
        const res = await axiosClient.put(`stores/edit/${idStore}`, form);

        const updatedStore = res.data.data;

        dispatch({
            type: 'UPDATE_STORE',
            payload: updatedStore,
        });
    };

    // 4. RETORNO
    return (
        <StoreContext.Provider
            value={{
                stores: globalState.stores,
                hola: globalState.hola,
                singleStore: globalState.singleStore,
                changeText,
                getStores,
                getStore,
                createStore,
                updateStore,
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreState;
