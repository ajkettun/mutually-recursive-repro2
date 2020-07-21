import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from "./tree-data";

@Component({
  selector: 'node-children',
  template: `
    <div>node-children {{node.name}}</div>
    <ng-container *ngFor="let child of node.children">
      <node [node]="child"></node>
    </ng-container>`
})
export class NodeChildrenComponent implements OnInit {
  @Input() node: TreeNode;

  ngOnInit(): void {
    console.log('NodeChildrenComponent created');
  }
}
