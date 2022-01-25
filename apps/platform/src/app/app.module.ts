import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedIconsModule } from '@bizawaynx/shared/icons';
import { SharedUtilModule } from '@bizawaynx/shared/util';
import { SharedUiModule } from '@bizawaynx/shared/ui';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideBarComponent,
    NavBarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    SharedIconsModule,
    SharedUtilModule,
    SharedUiModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: DashboardComponent,
        },
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
