import { ApplicationRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  tickCount = signal(0);

  constructor(private appRef: ApplicationRef) {
    setInterval(() => {
      this.appRef.tick();
      this.tickCount.update(count => count + 1);
    }, 500);
  }
}
