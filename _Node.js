class _Node{
  constructor(value, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }

  _findMin(){
    if(!this.left){
      return this;
    }

    return this.left._findMin();
  }
}

module.exports = _Node;