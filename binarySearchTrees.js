console.log("Day 22 - Binary Search Trees")

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
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
    
    // Start of function getHeight
    this.getHeight = function(root) {

        // Add your code here
        //node is null, no childen for parent
    if (root == undefined) {
        return -1;
    }
    // get the max of the between left and right
    var max = Math.max(this.getHeight(root.left), this.getHeight(root.right));

    return 1 + max;
    }; // End of function getHeight
};