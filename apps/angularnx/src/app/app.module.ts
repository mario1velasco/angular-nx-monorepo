import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedIconsModule } from '@bizawaynx/shared/icons';
import { SharedUiModule } from '@bizawaynx/shared/ui';
import { SharedUtilModule } from '../../../../libs/shared/util/src';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, SharedUiModule, SharedIconsModule, SharedUtilModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
