import React,{useState,useEffect} from "react";
import axios from "axios";
function Practice(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                const response =await axios.get("https://dummyjson.com/products");
                console.log(response.data);
                setProducts(response.data.products);
            }
            catch(Error){
                console.log("error is:" + Error);
            }
        }
        fetchProducts();
    },[]);
    return(
        <div>
            <h1>products Page</h1>
            <ul>
                {products.map((season)=>(
                    <li id="season.id">
                        {season.tittle}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Practice;
