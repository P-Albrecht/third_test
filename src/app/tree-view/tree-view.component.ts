import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EventEmitter } from '@angular/core';


interface TreeNode {
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
})

export class TreeViewComponent implements OnChanges {

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {}

  @Input() tree: TreeNode[];
  @Output() nodeSelectEvent = new EventEmitter<any>();

  ngOnInit() {
    this.dataSource.data = this.tree;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = this.tree;
  }

   hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
 
   clickFunction (node: any) {
    this.nodeSelectEvent.emit(node);
   }
 }


