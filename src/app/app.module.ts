import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { AuthRoutingModule } from './modules/auth-routing/auth-routing.module';
import { StreamsModule } from './modules/streams/streams.module';
import { StreamsRoutingModule } from './modules/streams/streams-routing.module';

import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/interceptors/auth-interceptor';

// import { HeaderComponent } from './components/header/header.component';

// import { AuthTabsComponent } from './components/auth-tabs/auth-tabs.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, StreamsModule, StreamsRoutingModule, AuthRoutingModule],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
