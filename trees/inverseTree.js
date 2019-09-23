// Invert a binary tree.

var invertTree = function(root) {

  if (!root) return null;
  
  if(root.left) invertTree(root.left);
  if(root.right) invertTree(root.right);

  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;

};