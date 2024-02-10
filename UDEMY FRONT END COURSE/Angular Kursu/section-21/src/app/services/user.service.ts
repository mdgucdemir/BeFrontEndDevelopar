import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  public createAccount(userObj: any) {
    return this.postReq('/users', userObj);
  }
}
