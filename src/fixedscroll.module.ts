import { NgModule } from "@angular/core";
import { FixedScrollDirective } from "./fixedscroll.directive";

@NgModule({
    declarations: [
        FixedScrollDirective
    ],

    exports: [
        FixedScrollDirective
    ]
})
export class NgFixedScrollModule {
}