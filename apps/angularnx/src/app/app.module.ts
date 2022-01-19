import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IconsModule } from '@bizawaynx/icons';
import { UiModule } from '@bizawaynx/ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, UiModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
