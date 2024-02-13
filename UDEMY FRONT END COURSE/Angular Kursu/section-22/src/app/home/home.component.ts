import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articlesData: Array<any> = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService
      .getArticle()
      .subscribe((res) => (this.articlesData = res));
  }
}
