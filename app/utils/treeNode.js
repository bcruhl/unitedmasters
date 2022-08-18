export class TreeNode {
  constructor(node) {
    this.id = node?.id;
    this.properties = node?.properties;
    this.descendants = [];
  }

  getChildren() {
    return this.descendants;
  }

  pushChild(node) {
    this.descendants.push(node);
  }
}