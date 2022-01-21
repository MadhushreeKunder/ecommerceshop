import { createContext, useState, useContext } from "react";

export const ProductContext = createContext();

export function ProductProvider({children}) {
    const [ productsData, setProductsData ] = useState([]);
    return (
        <ProductContext.Provider value = {{productsData, setProductsData}}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    return useContext(ProductContext);
}
