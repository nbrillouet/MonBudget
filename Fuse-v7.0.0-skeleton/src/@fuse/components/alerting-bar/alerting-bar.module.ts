import { AlertingBarComponent } from "./alerting-bar.component";
import { MatButtonModule, MatIconModule, MatTooltipModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        AlertingBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatTooltipModule
    ],
    exports     : [
        AlertingBarComponent
    ]
})
export class AlertingBarModule
{
}