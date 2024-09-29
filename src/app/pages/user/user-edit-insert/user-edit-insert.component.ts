import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-edit-insert',
  templateUrl: './user-edit-insert.component.html',
  styleUrl: './user-edit-insert.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditInsertComponent implements OnInit {

  form!: FormGroup;
  user!: User;
  idUser!: number;
  nameBtn: string = "Cadastrar";
  nameTitle: string = "Cadastrar";
  hide = signal(true);


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
  ) {
    this.createForm();

  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params.idUser;
      this.idUser = id;

      if (id && id > 0) {
        this.userService.getById(id).subscribe({
          next: (data) => {
            this.nameBtn = "Editar";
            this.nameTitle = "Editar";
            this.user = data;
            this.setValues();
          }
        });
      } else {
        this.user = new User();
      }
    });
  }

  createForm() {
    this.form = this.formBuilder.group(
      {
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(30)]),
        password: new FormControl("", [Validators.required]),
      },
    );
  }


  insert() {
    this.userService.insert(this.user).subscribe({
      next: (user: User) => {
        console.log(user);
        this.snackBar.open("Usuário cadastrado com sucesso", "Fechar", {
          duration: 1000,
        });

        setTimeout(() => {
          this.router.navigate(["list-user"]);
        }, 1100);
      },
      error: (err) => {
        if (err.error instanceof Error) {
          this.snackBar.open(`Ocorreu um erro ao salvar usuário`, "Fechar", {
            duration: 5000,
          });
        } else {
          if (err.status == 401) {
            this.snackBar.open(
              "Acesso negado ao servidor. Erro: " + err.status,
              "Fechar",
              {
                duration: 5000,
              }
            );
          }
        }
      },
    });
  }

  update() {
    this.userService.update(this.user).subscribe({
      next: (res: User) => {
        console.log(res);
        this.snackBar.open("Usuário atualizado com sucesso", "Fechar", {
          duration: 1000,
        });

        setTimeout(() => {
          this.router.navigate(["list-user"]);
        }, 1100);
      },
      error: (err) => {
        if (err.error instanceof Error) {
          this.snackBar.open(`Ocorreu um erro ao atualizar o usuário`, "Fechar", {
            duration: 5000,
          });
        } else {
          if (err.status == 401) {
            this.snackBar.open(
              "Acesso negado ao servidor. Erro: " + err.status,
              "Fechar",
              {
                duration: 5000,
              }
            );
          }
        }
      },
    });
  }

  save() {
    if (this.form.valid) {
      this.setUser();
      if (this.idUser > 0) {
        this.update();
      } else {
        this.insert();
      }
    } else {
      this.snackBar.open("Preencha os campos obrigatórios ", "OK", {
        duration: 5000,
      });
    }
  }


  setValues() {
    this.form.patchValue({
      name: this.user.nome,
      email: this.user.email,
      password: this.user.senha,
    });
  }

  setUser() {
    this.user.nome = this.form.get("name")?.value;
    this.user.email = this.form.get("email")?.value;
    this.user.senha = this.form.get("password")?.value;
    const dt = new Date();
    this.user.dataDeCadastro = dt.toISOString();
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  goToBack(): void {
    this.router.navigate(['list-user']);
  }

}
