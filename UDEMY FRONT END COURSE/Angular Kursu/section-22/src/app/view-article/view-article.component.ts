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
  userName: string = '';
  comment: string = '';

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

  addComment() {
    let obj = {
      username: this.userName,
      comment: this.comment,
    };
    this.selfArticleData[this.articleIndex].comments.push(obj);
    this.articleService
      .updateArticle(this.selfArticleData[this.articleIndex])
      .subscribe((res) => {
        // debugger;
        this.userName = '';
        this.comment = '';
      });
  }
}
