/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { useParams, useNavigate } from "react-router-dom";

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
  const [product, setProduct] = useState({ ...props.product });
  // product state ini setProduct funtion ile set edebilirim demektir yukaridaki yazim. Bu yazima js de distracting deniliyor.
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
    // useEffect life cycle da ki butun herseyi yonetmeye calisiyor. ve Sonsuz bir donguye giriyor
    // sonsuz donguden kurtulmak icin " },[sonsuz donguden kurtarmak icin gerekli olan parametre] "
    // bizim ornegimiz de " },[props.product] "
    // anlami ise " props.product i izle, o DOM a yelestigi zaman artik setProduct islemini bitirebilirsin"
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;

    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));

    validate(value, name);
  }

  function validate(value, name) {
    if (value === "" && name === "productName") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "It must be a Product Name",
      }));
    } else if (value === "" && name === "unitPrice") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        unitPrice: "It must be a Unit Price",
      }));
    } else if (value === "" && name === "quantityPerUnit") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        quantityPerUnit: "It must be a Quantity Per Unit",
      }));
    } else if (value === "" && name === "unitsInStock") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        unitsInStock: "It must be a Units In Stock",
      }));
    } else {
      if (name === "productName") {
        setErrors((previousErrors) => ({ ...previousErrors, productName: "" }));
      } else if (name === "unitPrice") {
        setErrors((previousErrors) => ({ ...previousErrors, unitPrice: "" }));
      } else if (name === "quantityPerUnit") {
        setErrors((previousErrors) => ({
          ...previousErrors,
          quantityPerUnit: "",
        }));
      } else if (name === "unitsInStock") {
        setErrors((previousErrors) => ({
          ...previousErrors,
          unitsInStock: "",
        }));
      }
    }
  }

  const navigate = useNavigate();

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      navigate("/"); // history.push("/") yerine kullaniliyor.
    });
  }

  return (
    // uygulama icerisindeki kullanicagimiz sayfa yazimi
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  return product;
}

function mapStateToProps(state) {
  const params = useParams();

  const productId = params.productId;

  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {}; // eger bir product var ve product guncelleniyorsa o id ye uygu product ti ver  o yoksa yeni bir product ekliyor  product ti bos bir object ile dondur

  return {
    // olusturmak istedigimiz state ler
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
  // react hooks tan once bu islem icin bir suru code yaziyorduk. Ama react hook sayesinde yukaridaki gibi sade bir yazim ile islemi hallediyoruz
};

export default connect(mapStateToProps, mapDispatchToProps)(AddorUpdateProduct);
