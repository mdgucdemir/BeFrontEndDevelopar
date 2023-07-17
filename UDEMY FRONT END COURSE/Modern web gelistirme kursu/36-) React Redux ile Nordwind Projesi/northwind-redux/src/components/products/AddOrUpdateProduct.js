
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions"

// useState ==> [ setState ] in yerine kullanicaz
// useEffect ==> [ componentDidMount ] un yerine kullanicaz

function AddorUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) {
    const [product,setProduct] = useState({...props.product})
    // product state ini setProduct funtion ile set edebilirim demektir yukaridaki yazim. Bu yazima js de distracting deniliyor.

    useEffect(()=>{
        if(categories.length === 0){
            getCategories();
        }
        setProduct({...props.product});
        // useEffect life cycle da ki butun herseyi yonetmeye calisiyor. ve Sonsuz bir donguye giriyor
        // sonsuz donguden kurtulmak icin " }.[sonsuz donguden kurtarmak icin gerekli olan parametre] "
        // bizim ornegimiz de " }.[props.product] "
        // anlami ise " props.product i izle, o DOM a yelestigi zaman artik setProduct islemini bitirebilirsin"  
    },[props.product]);

    function  handleChange(event){
        const {name,value} = event.target;

        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value,10) : value
        }));
    }

    function handleSave(event){
        event.preventDefault();
        saveProduct(product).then(()=>{
            history.push("/")
        });
    }
}