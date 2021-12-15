import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LaddaModule } from 'angular2-ladda';
import { MomentModule } from 'angular2-moment';
@NgModule({
    declarations: [

    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 2000,
            preventDuplicates: true,
        }),
        TooltipModule.forRoot(),
        LaddaModule,
        MomentModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TooltipModule,
        LaddaModule,
        MomentModule
    ]
})
export class SharedModule { }