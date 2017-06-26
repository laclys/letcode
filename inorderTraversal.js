//Given a binary tree, return the inorder traversal of its nodes' values.
// For example:
// Given binary tree [1,null,2,3],
//    1
//     \
//      2
//     /
//    3
// return [1,3,2].
var inorderTraversal = function (root) {
  var arr = [],
    result = [];
  while (true) {
    if (root !== null) {
      arr.push(root);
      root = root.left;
    } else {
      if (arr.length == 0) {
        break;
      }
      root = arr.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
}