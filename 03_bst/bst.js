function BinarySearchTree(root){
  //this.root=new Node(root);
  this.counter = 1;
  this.value = root;
  this.previous = null;
  this.left = null;
  this.right = null;
}
// function Node(value){
//   this.value=value;
//   this.previous=null;
//   this.left=null;
//   this.right=null;
// }
BinarySearchTree.prototype.insert = function(num, rootNode){
  rootNode = rootNode || this;
  var newNode = new BinarySearchTree(num);
  if (num <= rootNode.value){
    if (!rootNode.left){
      rootNode.left = newNode;
      rootNode.left.previous = rootNode;
      this.counter++;
    }
    else {
      this.insert(num, rootNode.left);
    }
  }
  else if (!rootNode.right){
      rootNode.right=newNode;
      rootNode.right.previous=rootNode;
      this.counter++;
    }
    else {
      this.insert(num, rootNode.right);
    }
};
BinarySearchTree.prototype.contains = function(value, rootNode){
  rootNode = rootNode || this;
  //if (!rootNode) return false;
  if (value === rootNode.value) {
    return true;
  }
  if (value < rootNode.value) {
    if (rootNode.left){
      return this.contains(value, rootNode.left);
    }
    return false;
  }
  if (value > rootNode.value) {
    if (rootNode.right){
      return this.contains(value, rootNode.right);
    }
    return false;
  }
};
BinarySearchTree.prototype.depthFirstForEach = function(func, order){
  if (order === 'pre-order'){
    func(this.value);
    if (this.left) {
      this.left.depthFirstForEach(func,order);
    }

   if (this.right) {
      this.right.depthFirstForEach(func,order);
    }
  }
  else if (order === 'post-order'){
    if (this.left) {
      this.left.depthFirstForEach(func,order);
    }

   if (this.right) {
      this.right.depthFirstForEach(func,order);
    }
    func(this.value);
  }
  else {
    if (this.left) {
      this.left.depthFirstForEach(func,order);
    }
    func(this.value);
    if (this.right) {
      this.right.depthFirstForEach(func,order);
    }
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function(func){
  var queue = [];
  queue[0] = this;
  while (queue.length > 0) {
    if (queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0].right) {
      queue.push(queue[0].right);
    }
    func(queue[0].value);
    queue.shift();
  }
};
BinarySearchTree.prototype.size = function(){
  return this.counter;
};
