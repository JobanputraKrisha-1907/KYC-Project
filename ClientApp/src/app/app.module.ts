import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RegistrationComponent } from './home/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { BackButtonDisableModule } from 'angular-disable-browser-back-button';*/
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { CdTimerModule } from 'angular-cd-timer';
import { NgOtpInputModule } from 'ng-otp-input';
import { ForgotPassword_oneComponent } from './forgot-password/forgot-password_one.component';
import { ForgotPassword_twoComponent } from './forgot-password/forgot-password_two.component';
import { ForgotPassword_thirdComponent } from './forgot-password/forgot-password_third.component';
import { KycconfirmationComponent } from './home/kycconfirmation.component';
import { MasterHeaderComponent } from './home/master-header.component';
import { MasterFooterComponent } from './home/master-footer.component';
import { Address_detailComponent } from './home/address_detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BankDetailsComponent } from './home/bank-details.component';
import { FatcaDetailsComponent } from './home/fatca-details.component';
import { VideoIpvComponent } from './home/video-ipv.component';
import { PdfPreviewComponent } from './home/pdf-preview.component';
import { ClientDashboardComponent } from './home/client-dashboard.component';
import { MasterNavComponent } from './home/master-nav.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard.component';
import { AdminKycApprovedComponent } from './Admin/admin-kyc-approved.component';
import { AdminNewRequestComponent } from './Admin/admin-new-request.component';
import { AdminRejectedRequestComponent } from './Admin/admin-rejected-request.component';
import { AdminTotalRequestComponent } from './Admin/admin-total-request.component';

import { AdminMasterNavComponent } from './Admin/admin-master-nav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminAddMasterDataComponent } from './Admin/AdminMasterData/admin-add-master-data.component';
import { AdminDeleteMasterDataComponent } from './Admin/AdminMasterData/admin-delete-master-data.component';
import { AdminMasterDataDashboardComponent } from './Admin/AdminMasterData/admin-master-data-dashboard.component';
import { AdminUpdateMasterDataComponent } from './Admin/AdminMasterData/admin-update-master-data.component';
import { AdminVerifyClientComponent } from './Admin/admin-verify-client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminUnderProcessRequestComponent } from './Admin/admin-under-process-request.component';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        RegistrationComponent,
        HeaderComponent,
        FooterComponent,
        LoaderComponent,
        ForgotPassword_oneComponent,
        ForgotPassword_twoComponent,
        ForgotPassword_thirdComponent,
        KycconfirmationComponent,
        MasterHeaderComponent,
        MasterFooterComponent,
        Address_detailComponent,
        BankDetailsComponent,
        FatcaDetailsComponent,
        VideoIpvComponent,
        PdfPreviewComponent,
        ClientDashboardComponent,
        MasterNavComponent,
        AdminDashboardComponent,
        AdminKycApprovedComponent,
        AdminNewRequestComponent,
        AdminRejectedRequestComponent,
        AdminTotalRequestComponent,
        AdminUnderProcessRequestComponent,
        AdminMasterNavComponent,
        AdminMasterDataDashboardComponent,
        AdminAddMasterDataComponent,
        AdminDeleteMasterDataComponent,
        AdminUpdateMasterDataComponent,
        AdminVerifyClientComponent,
        
    ],
    imports: [
        BrowserAnimationsModule,
        MatTabsModule,
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule, CdTimerModule,
        //HeaderComponent,
        //FooterComponent,
        //LoaderComponent,
        NgOtpInputModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        NgbModule,
        OrderModule,
        ToastrModule.forRoot(),
      /*  BackButtonDisableModule.forRoot(),*/
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'forgotPass-one', component: ForgotPassword_oneComponent },
            { path: 'forgotPass-two', component: ForgotPassword_twoComponent },
            { path: 'forgotPass-three', component: ForgotPassword_thirdComponent },
            { path: 'KycConfirm', component: KycconfirmationComponent },
            { path: 'KycAddress', component: Address_detailComponent },
            { path: 'KycFatcaDetails', component: FatcaDetailsComponent },
            { path: 'KycBankDetails', component: BankDetailsComponent },
            { path: 'KycVideoIPV', component: VideoIpvComponent },
            { path: 'KycPdfPreview', component: PdfPreviewComponent },
            { path: 'KycClientDashboard', component: ClientDashboardComponent },
            { path: 'KycAdminDashboard', component: AdminDashboardComponent },
            { path: 'KycAdminTotalRequest', component: AdminTotalRequestComponent },
            { path: 'KycAdminUnderProcess', component: AdminUnderProcessRequestComponent },
            { path: 'KycAdminNewRequest', component: AdminNewRequestComponent },
            { path: 'KycAdminKycApproved', component: AdminKycApprovedComponent },
            { path: 'KycAdminMasterDataDashboard', component: AdminMasterDataDashboardComponent },
            { path: 'KycAdminAddMasterData', component: AdminAddMasterDataComponent },
            { path: 'KycAdminUpdateMasterData', component: AdminUpdateMasterDataComponent },
            { path: 'KycAdminDeleteMasterData', component: AdminDeleteMasterDataComponent },
            { path: 'KycAdminVerifyClient', component: AdminVerifyClientComponent },
            { path: 'KycAdminRejectedRequest', component: AdminRejectedRequestComponent },
           
            //{ path: 'header', component: HeaderComponent },
            //{ path: 'footer', component: FooterComponent },
            //{ path: 'loader', component: LoaderComponent },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
