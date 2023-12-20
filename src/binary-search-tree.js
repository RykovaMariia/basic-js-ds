const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.roott = null;
  }

  root() {
    return this.roott;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.roott === null) {
      this.roott = newNode;
    } else {
      let currentRoot = this.roott;
      while (currentRoot && currentRoot.data !== newNode.data) {
        if (newNode.data < currentRoot.data) {
          if (!currentRoot.left) {
            currentRoot.left = newNode;
            break;
          } else {
            currentRoot = currentRoot.left;
          }
        } else {
          if (!currentRoot.right) {
            currentRoot.right = newNode;
            break;
          } else {
            currentRoot = currentRoot.right;
          }
        }
      }
    }
  }

  has(data) {
    let currentRoot = this.roott;

    while (currentRoot) {
      if (data === currentRoot.data) return true;
      else if (data > currentRoot.data) {
        currentRoot = currentRoot.right;
      } else {
        currentRoot = currentRoot.left;
      }
    }
    return false;
  }

  find(data) {
    let currentRoot = this.roott;

    while (currentRoot) {
      if (data === currentRoot.data) return currentRoot;
      else if (data > currentRoot.data) {
        currentRoot = currentRoot.right;
      } else {
        currentRoot = currentRoot.left;
      }
    }
    return null;
  }

  remove(data) {
    if (this.find(data)) {
      this.roott = this.removeNode(this.roott, data);
    }
  }

  removeNode(node, data) {
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      node.data = this.min(node.right);
      node.right = this.removeNode(node.right, node.data);
    }
    return node;
  }

  min(node = this.roott) {
    let min = node.data;

    while(node.left) {
      min = node.left.data;
      node = node.left;
    }
    return min;
  }

  max(node = this.roott) {
    let max = node.data;

    while(node.right) {
      max = node.right.data;
      node = node.right;
    }
    return max;
  }
}

module.exports = {
  BinarySearchTree,
};