import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  question: string = '';
  questionList: Array<any> = [];

  constructor(
    public questionService: QuestionService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((res) => {
      // console.log(res);
      this.questionList = res;
    });
  }

  post() {
    this.questionService
      .postQuestions({
        username: this.userService.user.username,
        question: this.question,
        solutions: [],
      })
      .subscribe((res) => {
        this.questionList.push(res);
      });
  }
}
