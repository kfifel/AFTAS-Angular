import {NgModule} from "@angular/core";
import {FishListComponent} from "./fish-list/fish-list.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {fishesRoutes} from "./routes/fish.routing";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UIModule} from "../../shared/ui/ui.module";


@NgModule({
  declarations: [FishListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(fishesRoutes),
    CommonModule,
    ReactiveFormsModule,
    UIModule,
    FormsModule
  ],
})
export class FishModule {}
