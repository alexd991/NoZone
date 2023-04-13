import { ApplicationRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.less']
})
export class AppComponent {
  tickCount = signal(0);

  constructor(private appRef: ApplicationRef) {
    setInterval(() => {
      this.appRef.tick();
      this.tickCount.update(count => count + 1);
    }, 500);
  }

  logDetectChanges() {
    console.log('App Root has been checked');
    return true;
  }
}
