import { Component } from '@angular/core';
import dayjs from 'dayjs';
import 'dayjs/locale/nl';
import 'dayjs/locale/fr';
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  locales = ['en', 'nl', 'fr'];
  formats = ['L', 'LL', 'LLL', 'LLLL', 'llll'];
  currentLocale = 'en';
  currentFormat = 'L';

  today = dayjs();

  get formatted() {
    return this.today.locale(this.currentLocale).format(this.currentFormat);
  }
}
