const BinarySearchTree = require('./BinarySearchTree');

function main(){

  let bTree1 = [3, 1, 4, 6, 9, 2, 5, 7]
  let bTree2 = [ 'E', 'A','S','Y','Q','U','E','S','T','I','O','N'];

  bTree1 = createBtree(bTree1);
  console.log(bTree1.display());
  bTree1.remove(6);
  console.log(bTree1.display());
}

function createBtree(array){
  let btree = new BinarySearchTree;
  for(let i = 0; i < array.length; i++){
    btree.insert(array[i]);
  }
  return btree;
}

main();