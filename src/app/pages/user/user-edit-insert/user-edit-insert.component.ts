import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-edit-insert',
  templateUrl: './user-edit-insert.component.html',
  styleUrl: './user-edit-insert.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditInsertComponent {

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
