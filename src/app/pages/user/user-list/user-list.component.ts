import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogYesNoComponent } from '../../../shared/shared/dialog-yes-no/dialog-yes-no.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface UserData {
  id: string;
  nome: string;
  email: string;
  dataDeCadastro: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'dataDeCadastro', "acoes"];
  dataSource!: MatTableDataSource<User>;

  data: User = { id: 2, nome: "joao", email: "ggdgdg", senha: "fdffd", dataDeCadastro: "dfdfdfdfd" }

  users: User[] = [];

  readonly dialog = inject(MatDialog);
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar,


  ) {
    this.listUsers();

  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  listUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
      },
      error: () => {
        // this.users = [this.data];
        // this.dataSource = new MatTableDataSource(this.users)

      },
    });
  }

  deleteUser(id: number): void {
    this.userService.delete(id).subscribe({
      next: () => {
        this.listUsers();
        this.snackBar.open("Usuário apagado com sucesso", "Fechar", {
          duration: 1000,
        });
      }
    });
  }


  deleted(id: number): void {
    this.openDialog(id);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogYesNoComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(id);
      }
    });
  }

  goToEdit(id: any): void {
    this.router.navigate([`user-edit-insert/${id}`]);
  }

  goToAddUser(): void {
    this.router.navigate(['user-edit-insert/?']);
  }

}

