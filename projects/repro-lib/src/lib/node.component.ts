import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from "./tree-data";

@Component({
  selector: 'node',
  template: `
    <div>
      <div>node {{ node.name }}</div>
      <node-children [node]="node">
      </node-children>
    </div>`
})
export class NodeComponent implements OnInit {
  @Input() node: TreeNode;

  ngOnInit() {
    console.log('NodeComponent created');
  }
}
