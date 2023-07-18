import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({categories, product, onSave, onChange,}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update Product" : "Add New Product"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error = "error"
      />
      <SelectInput
        name="categoryId"
        label="category"
        value={product.categoryId || ""}
        defaultOption="Seciniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="error"
      />
      <button type="submit" className="btn btn-succes">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
