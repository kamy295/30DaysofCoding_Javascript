console.log("Day 23 - BST Level Order Traversal");

function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function (root) {
    // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
    let queue = [root];
    while (queue.length) {
      let node = queue.shift();
      process.stdout.write(`${node.data} `);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }; // End of function levelOrder
} //
