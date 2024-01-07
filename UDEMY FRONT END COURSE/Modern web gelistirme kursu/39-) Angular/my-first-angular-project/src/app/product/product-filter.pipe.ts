import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLowerCase() : '';
    return filterText
      ? value.filter(
          (p: Product) => p.name.toLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
