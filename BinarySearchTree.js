const _Node = require('./_Node');

class BinarySearchTree{

  constructor(){
    this.parent = null;
  }

  insert(value){

    // if the tree is empty
    if(!this.parent){
      this.parent = new _Node(value);
      return;
    }
      

    let currNode = this.parent;

    while(currNode.value){
      if(currNode.value > value){
        if(!currNode.left){
          currNode.left = new _Node(value);
          return;
        } else {
          currNode = currNode.left;
        }
      } else {
        if(!currNode.right){
          currNode.right = new _Node(value);
          return;
        } else {
          currNode = currNode.right;
        }
      }
    }
  }

  display(currNode = this.parent){
    
    if(!currNode){
      return ' - ';
    }

    if(!currNode.value){
      return ' - ';
    } 

    return this.display(currNode.left) + ' ' + currNode.value + ' ' + this.display(currNode.right);
  }

  remove(value, currNode=this.parent){
    if(!this.parent){
      throw new Error(`Key Error`);
    }

    if(currNode.value === value){
      if(currNode.left && currNode.right){

        const successor = this.right._findMin();
        console.log(successor);
        currNode.value = successor.value;
        this.remove(successor.value, successor);

      } else if(currNode.left){
        console.log(`Only left child`, currNode);
        this.replaceWith(currNode.left, currNode);
      } else if(currNode.right){
        console.log(`Only right child`, currNode);
        this.replaceWith(currNode.right, currNode);
      } else {
        console.log(`No children`, currNode);
        this.replaceWith(null, currNode);
      }
    } else if (currNode.value < value && currNode.right){
      this.remove(value, currNode.right);
    } else if(currNode.value > value && currNode.left){
      this.remove(value, currNode.left);
    } else {
      throw new Error(`Value not found`);
    }
    
  }

  replaceWith(node, currNode){
    if(currNode){
      if(currNode.left){
        if(currNode.left.value === node.value){
          currNode.value = node.value;
          currNode.left = node.left;
          currNode.right = node.right;
        }
      } else{
        if(currNode.right.value === node.value){
          currNode.value = node.value;
          currNode.left = node.left;
          currNode.right = node.right;
        }
      }

      if(!node){
        currNode.value = null;
        currNode.left = null;
        currNode.right = null;
      }
    }else {
      if(node){
        currNode = node;
      }else {
        currNode.value = null;
        currNode.left = null;
        currNode.right = null;
      }
    }
  }

  find(value){

  }

}

module.exports = BinarySearchTree;