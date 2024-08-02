// angular import
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [SharedModule, MatIconModule, RouterModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent {}
