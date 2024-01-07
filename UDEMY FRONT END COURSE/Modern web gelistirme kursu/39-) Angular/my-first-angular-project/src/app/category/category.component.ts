import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  title: string = 'Categories List';
  categories: Category[] = [
    { id: 1, name: 'Computer' },
    { id: 2, name: 'Computer Components' },
    { id: 3, name: 'Mobile Phone' },
    { id: 4, name: 'Tv' },
    { id: 5, name: 'Monitor' },
  ];
}
