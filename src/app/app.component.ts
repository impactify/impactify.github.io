import { Component } from '@angular/core';
import { AppComponentModel } from './app.component.model';
import { ApplicationStateService } from './services/application-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  title = 'app';

  public myViewModel: AppComponentModel;
  public isMobileResolution: boolean;
  private model: AppComponentModel;

  constructor(private applicationStateService: ApplicationStateService) {
    this.model = new AppComponentModel();
    this.myViewModel = new AppComponentModel();

    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }
}
