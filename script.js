module.exports = {
  randomizeQuarters: function (){
    quarters = [1,1,1,1,1,1,1,1];
    var random = Math.floor(Math.random()*quarters.length);
    quarters[random] = 2;
  },
  quarterScale: function (one, two){
    var first = null;
    var second = null;

    for(var i = 0; i < one.length; i++){
      if (quarters[one[i] - 1] > 1){
        first = true;
        break;
      }else{
        first = false;
      }
    }
    for(var j = 0; j < two.length; j++){
      if (quarters[two[j] - 1] > 1){
        second = true;
        break;
      }else{
        second = false;
      }
    }
    return [first, second];
  }

};

