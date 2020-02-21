import { AlertingBarComponent } from "./alerting-bar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

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