import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/Login/login-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css',
})
export class SignupPage {
  public Pseudo: any;
  public Password: any;
  public PasswordConfirm: any;
  public Mail: any;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private loginservice: LoginServices,
  ) {}

  Inscription() {
    if (this.Mail == '') {
      alert('Un champ est vide');
      return;
    }
    if (this.Password == '') {
      alert('Un champ est vide');
      return;
    }
    if (this.Pseudo == '') {
      alert('Un champ est vide');
      return;
    }
    if (this.PasswordConfirm == '') {
      alert('Un champ est vide');
      return;
    }
    const send_data = {
      pseudo: this.Pseudo,
      email: this.Mail,
      password: this.Password,
      passwordConfirm: this.PasswordConfirm,
    };
    this.loginservice.Inscription(send_data).subscribe({
      next: (data) => {
        if (data.code == '200') {
          alert(data.message);
          this.router.navigateByUrl('/');
        } else {
          alert(data.message);
        }
      },
    });
  }
}
