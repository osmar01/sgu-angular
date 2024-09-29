import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AutheticationService } from '../../../services/authetication.service';
import { UserDto } from '../../../shared/DTO/userDTO';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  form!: FormGroup;

  user!: UserDto;
  userAuth!: User;

  autenticado = false;

  hide = true;
  viewLogin = false;
  viewNewUser = false;
  home = true;

  hidePassword = true;
  hidePasswordConfirm = true;
  profileId = 0;

  constructor(
    // private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public authentication: AutheticationService,
    private localStorageService: LocalStorageService
  ) {
    this.createForm();
  }

  setUser() {
    this.user = new UserDto();
    this.user.email = this.form.get("email")?.value;
    this.user.senha = this.form.get("password")?.value;
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  login() {
    if (this.form.valid) {
      this.setUser();
      this.singIn();
    } else {
      this.snackBar.open("Preencha os campos obrigatórios", "OK", {
        duration: 4000,
      });
    }
  }

  singIn() {
    this.authentication.login(this.user).subscribe({
      next: (data) => {
        console.log(data);
        const token = data.token;

        this.localStorageService.set('token', token);
        this.router.navigate(["list-user"]);
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Falha no login', "OK", {
          duration: 4000,
        });
      }
    });
  }


}
