import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  public postQuestions(questionObj: any) {
    {
      return this.postReq('/questions', questionObj);
    }
  }

  public getQuestions() {
    return this.getReg('/questions');
  }

  public getQuestionWithId(id: string) {
    return this.getReg('/questions/' + id);
  }

  public updateQuestion(newObj: any) {
    return this.putReq('/questions/' + newObj.id, newObj);
  }
}
