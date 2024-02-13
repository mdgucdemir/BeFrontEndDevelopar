import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
})
export class ViewArticleComponent implements OnInit {
  selfArticleData: Array<any> = [];
  articleIndex: any;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // debugger;
    this.articleIndex = this.route.snapshot.paramMap.get('articleIndex');

    this.articleService.getArticle().subscribe((res) => {
      // debugger;
      this.selfArticleData = res;
    });
  }
}
