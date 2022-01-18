import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from '../../../../libs/icons/src';
import { UiModule } from '../../../../libs/ui/src';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, UiModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
