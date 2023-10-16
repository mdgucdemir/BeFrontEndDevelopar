import { Product } from "./product.model";
const products = [{ title: 'adkf', price: 23 }, { title: 'sdadf', price: 23 }];
const fosikProduct = products.map(prod => {
    return new Product(prod.title, prod.price);
});
for (const prod of fosikProduct) {
    console.log(prod.getInformation());
}
//# sourceMappingURL=app.js.map