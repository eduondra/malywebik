import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUsersEntity, UserserviceService} from '../services/users.service';
import {delay} from 'rxjs/operators';
import {compareSegments} from "@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUsersEntity;
  username: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UserserviceService,
    private readonly  router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      const id: string = p.get('id');
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .subscribe(
          u => {
            this.user = u;
            if (u) {
              this.user = u;
            } else {
              this.router.navigateByUrl('/user');

            }
          },
          e => {
            console.log(e);
          });
    });
  }

  edit() {
    this.usersService.edit(this.user.id, this.username)
      .subscribe(u => this.router.navigateByUrl("/user"))

  }
}
