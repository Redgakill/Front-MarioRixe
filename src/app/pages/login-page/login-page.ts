import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/Login/login-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  public Mail:any;
  public Password:any;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private loginservice: LoginServices,
  ) {}

  Login() {
    if (this.Mail == '') {
      alert('Un champ est vide');
      return;
    }
    if (this.Password == '') {
      alert('Un champ est vide');
      return;
    }
    const send_data={
      email:this.Mail,
      password:this.Password,
    }
    this.loginservice.Connexion(send_data).subscribe({
      next: (data) => {
        if (data.code == '200') {
          alert(data.message);
          this.router.navigateByUrl('/');
        } else {
          alert(data.message);
        }
      }
    })
  }
  HomePage(){
    this.router.navigateByUrl('/');
  }
}
