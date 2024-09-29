import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-sub-header-sing-out',
  templateUrl: './sub-header-sing-out.component.html',
  styleUrl: './sub-header-sing-out.component.css'
})
export class SubHeaderSingOutComponent {

  constructor(
    private router: Router,
    private storage: LocalStorageService
  ) { }

  signOut(): void {
    this.storage.remove(`token`)
    this.router.navigate([`login`]);
  }

}
