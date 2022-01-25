import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedIconsModule } from '@bizawaynx/shared/icons';
import { SharedUiModule } from '@bizawaynx/shared/ui';
import { SharedUtilModule } from '@bizawaynx/shared/util';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiModule, SharedIconsModule, SharedUtilModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
