import { Component, OnInit } from '@angular/core';
import { GitserviceService} from '../gitservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
  records: any;
  repos: any;
  username: string;

  constructor(private _gitservice: GitserviceService) {
    this.records = false;
  }
  searchUser(){

    this._gitservice.updateUser(this.username);

    this._gitservice.getuser().subscribe(res => {
      this.records = res;

    } );
    this._gitservice.getRepos().subscribe(repos => {
      this.repos = repos;

    } );
  }
}
