import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  user!: User;
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService : UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.userService.getUser().subscribe(
      (response: User) => {
        this.user = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  checkCredentials(): boolean {
    return this.username === this.user.username && this.password === this.user.password;
  }

  redirectToAdminPage() {
    if (this.checkCredentials()) {
      this.router.navigate(['/admin']);
    }
  }
}
