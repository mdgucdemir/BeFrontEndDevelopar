import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  public postArticle(data: any) {
    return this.base.postReq('/articles', data);
  }

  public getArticle() {
    return this.base.getReg('/articles');
  }
}
