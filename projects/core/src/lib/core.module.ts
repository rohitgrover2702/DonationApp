import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { CookieModule, CookieService } from 'ngx-cookie';
// import { ErrorHandlerService, ApiService } from '../Projects';



@NgModule({
  declarations: [CoreComponent],
  imports: [ToastrModule.forRoot(),
  TranslateModule.forRoot(),
  CookieModule.forRoot()
  ],
  providers: [CookieService,
    //  ErrorHandlerService, ApiService
    ],
  exports: []
})
export class CoreModule { }
