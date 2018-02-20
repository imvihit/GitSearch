import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class GitserviceService {
  private username: string;
  private client_id = '3620df9c21cec74b97cd';
  private client_secret = '849f6a35efc7f0f3d02bc58816f2fdae190f9cc9';

  constructor(private _http: HttpClient) {
    console.log('Git Service Intialized...');
    this.username = 'imvihit';
  }

  getuser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
  }
  updateUser(username:string ){
    this.username = username;

  }
}
