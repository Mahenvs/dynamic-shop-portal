import { createContext, useReducer } from "react";

export const ProductContext = createContext({
    products: [],

})

function productCartReducer(state,action){
    if(action.type=== "Add_Product"){
        console.log("Inside add product");
    }
}
export default function CartContextProvider({children}) {
    
    const [productCartState,productCartDispatch] = useReducer(
        productCartReducer,
        {
            products: []
        }
    )

    function handleAddProducts(productData){
        productCartDispatch({
            type:"Add_Product",
            payload: productData
        })
    }
    const ctxValue ={
        products: productCartState.products
    }
    return <ProductContext.Provider value={ctxValue}>
        {children}
    </ProductContext.Provider>
}