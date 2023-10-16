import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator'

import { Product } from './product.model';

const products = [{title: 'adkf',price: 23},{title: 'sdadf', price: 23}];

// const p1 = new Product('A book' , 21);

// const fosikProduct = products.map(prod => {
//     return new Product(prod.title,prod.price);
// });

const fosikProduct = plainToClass(Product, products);

for (const prod of fosikProduct) {
    console.log(prod.getInformation());
}

const newProd = new Product('',-2);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log("VALIDATION ERRORS!");
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});