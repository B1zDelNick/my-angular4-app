import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  selectedView: string = 'recipes';

  onViewChanged(view: string): void
  {
    this.selectedView = view;
  }
}
