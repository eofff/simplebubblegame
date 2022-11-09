import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { ScreenNewGameComponent } from './screen-new-game/screen-new-game.component';
import { ScreenMainComponent } from './screen-main/screen-main.component';
import { ScreenEndComponent } from './screen-end/screen-end.component';
import { RouterModule } from '@angular/router';
import { HealthBarComponent } from './screen-main/health-bar/health-bar.component';
import { BubbleComponent } from './bubble/bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    ScreenNewGameComponent,
    ScreenMainComponent,
    ScreenEndComponent,
    HealthBarComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ScreenComponent }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
