import { NgModule } from '@angular/core';
import { LoginModule } from './authentication/login/login.module';
import { RegisterModule } from './authentication/register/register.module';
import { Error500Module } from './errors/500/error-500.module';
import { HomeModule } from './home/home.module';
import { MailConfirmModule } from './authentication/mail-confirm/mail-confirm.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';
import { ForgotPassword2Module } from './authentication/forgot-password-2/forgot-password-2.module';
import { ResetPasswordModule } from './authentication/reset-password/reset-password.module';

@NgModule({
    declarations: [
        // ProgressiveImageLoaderDirective
    ],
    imports: [
        // LazyLoadImageModule,
        // Auth
        HomeModule,
        LoginModule,
        // Login2Module,
        RegisterModule,
        // Register2Module,
        ForgotPasswordModule,
        ForgotPassword2Module,
        ResetPasswordModule,
        // ResetPassword2Module,
        // LockModule,
        MailConfirmModule,

        // Coming-soon
        // ComingSoonModule,

        // Errors
        // Error404Module,
        Error500Module

        // Invoices
        // InvoiceModernModule,
        // InvoiceCompactModule,

        // Maintenance
        // MaintenanceModule,

        // Pricing
        // PricingModule,

        // Profile
        // ProfileModule,

        // Search
        // SearchModule,

        // Faq
        // FaqModule,

        // Knowledge base
        // KnowledgeBaseModule
    ]
})
export class FusePagesModule
{

}
