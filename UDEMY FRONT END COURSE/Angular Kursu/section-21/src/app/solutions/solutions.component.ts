import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent implements OnInit {
  solutionText: string = '';
  questionId: any;
  questionObj: any;

  constructor(
    public questionService: QuestionService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.questionService.getQuestionWithId(this.questionId).subscribe((res) => {
      console.log(res);
      this.questionObj = res;
    });
  }

  postSolution() {
    let solutionObj = {
      userName: this.userService.user.username,
      solution: this.solutionText,
      plus: [],
      minus: [],
    };

    this.questionObj.solutions.push(solutionObj);
    this.questionService.updateQuestion(this.questionObj).subscribe((res) => {
      console.log(res);
      this.solutionText = '';
    });
  }

  returnBack() {
    // asagida iki sekilde calisma pratigi yapimistir. 2 side ayni islevi yapar
    this.router.navigateByUrl('/home');
    // this.router.navigate(['/home']);
  }
}
