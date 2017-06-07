function HashTable(){
  this.numBuckets=35;
  this.data = [];
}
HashTable.prototype.set=function(key, val){
  if (typeof key !== 'string') {
    throw new TypeError('Keys must be strings')
  }
   var hashKey = this.hash(key);
   var newNode = new Node(key,val);
   if (this.data[hashKey] == null) {
     this.data[hashKey] = newNode;
   } else {
     var currentNode = this.data[hashKey];
     while(currentNode.next){
       if (currentNode.key ==key){
         currentNode.value = val;
         return;
       }
      currentNode = currentNode.next;
     }
     if (currentNode.key ==key){
         currentNode.value = val;
         return;
       }
     currentNode.next = newNode;
   }

}
HashTable.prototype.get=function(key){
  var ind = this.hash(key);
  var currentNode = this.data[ind];
  if(!currentNode){
    return null;
  }
  while (currentNode.key != key){
    currentNode = currentNode.next;
    if (!currentNode){
      return null;
    }
  }
  return currentNode.value;

}
HashTable.prototype.hasKey=function(key){
  var temp = this.get(key);
  if (!temp){
    return false;
  }
  return true;
}
HashTable.prototype.hash=function(input){
  var keyCodeCount = 0;
  for (var i = 0; i < input.length; ++i) {
    keyCodeCount += input[i].charCodeAt();
  }
  return keyCodeCount % this.numBuckets;
}

function Node(key, value,next){
  this.key = key;
  this.value = value;
  this.next = null;
}
