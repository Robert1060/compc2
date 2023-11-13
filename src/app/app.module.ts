import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegionsComponent } from './regions/regions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegionCountriesComponent } from './countries/countries.component';
import { LetModule } from '@ngrx/component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CountryInfoComponent } from './countries/country-info/country-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeDialogComponent } from './components/about-me-dialog/about-me-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomErrorHandler } from './handlers/custom-error-handler';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalHttpErrorHandlerInterceptor } from './handlers/global-http-error-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegionsComponent,
    RegionCountriesComponent,
    CountryInfoComponent,
    FooterComponent,
    AboutMeDialogComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    LetModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
