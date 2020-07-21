import {NgModule} from '@angular/core';
import {NodeComponent} from "./node.component";
import {NodeChildrenComponent} from "./node-children.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [NodeComponent, NodeChildrenComponent],
  imports: [CommonModule],
  exports: [NodeComponent, NodeChildrenComponent]
})
export class ReproLibModule {
}
