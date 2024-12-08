import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import localePl from '@angular/common/locales/pl'
import {registerLocaleData} from "@angular/common"

registerLocaleData(localePl, 'pl')

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
