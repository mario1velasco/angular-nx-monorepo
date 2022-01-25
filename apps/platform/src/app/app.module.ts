import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedIconsModule } from '@bizawaynx/shared/icons';
import { SharedUtilModule } from '@bizawaynx/shared/util';
import { SharedUiModule } from '@bizawaynx/shared/ui';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, LayoutComponent, SideBarComponent],
  imports: [
    BrowserModule,
    SharedIconsModule,
    SharedUtilModule,
    SharedUiModule,
    RouterModule.forRoot(
      [
        {
          path: 'hotel',
          loadChildren: () =>
            import('hotel/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'train',
          loadChildren: () =>
            import('train/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
