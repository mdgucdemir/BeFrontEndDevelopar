import React from "react";
import TextInput from "../toolbox/TextInput";

const ProductDetail = (categories, product, onSave, onChange, error) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update Product" : "Add New Product"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}        
      />
      <button type="submit" className="btn btn-succes">Save</button>
    </form>
  );
};

export default ProductDetail