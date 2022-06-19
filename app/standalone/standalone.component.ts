import { Component, Inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'; import { VALWIDTH } from '../app.module';
import { StandaloneChildComponent } from '../standalone-child/standalone-child.component';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  standalone: true,
  styleUrls: ['./standalone.component.sass'],
  imports: [StandaloneChildComponent, MatProgressBarModule]
})
export class StandaloneComponent {

  constructor(@Inject(VALWIDTH) public width: number) { }
}
