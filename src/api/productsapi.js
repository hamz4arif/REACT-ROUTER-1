//query page

import products from "../data/dataproducts";
const getProducts=()=>products;
const getProductsById=(id)=>{
    console.log("api.getProductsById called for id=",id);
    let array=products.filter(p=>p.id===Number(id))
    return array[0];    
}
export default {getProducts,getProductsById};