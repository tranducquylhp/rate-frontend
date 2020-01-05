import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {UserService} from '../../service/user.service';
import {User} from '../../interface/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    if (this.authenticationService.currentUserValue) {
      const username = this.authenticationService.currentUserValue.username;
      userService.getUserByUsername(username).subscribe(next => {
        this.currentUser = next;
      }, error1 => {
        console.log(error1);
      });
    }
  }

  currentUser: User;

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }
}
