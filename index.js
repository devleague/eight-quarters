var async = require('async');
var prompt = require('prompt');

var modules = require('./script');

var quarters = [1,1,1,1,1,1,1,1];

function game(){

async.series([

  function(callback){
    prompt.start();

    modules.randomizeQuarters();

    return promptScale(callback);

  },

  function (callback){
    prompt.start();

    return promptScale(callback);
  },

  function (callback){
    prompt.start();

    return promptScale(callback);
  }

  ],
  function(err, results){
    console.log('you have ran out of tries! Please try again!');
    return game();
  });
}

function onErr(err){
  console.log(err);
  return 1;
}

var promptScale = function (callback){
  prompt.get(['leftScale', 'rightScale'], function(err, res){
    if (err){return onErr(err)}
    console.log('[ ' + res.leftScale + ', ' + res.rightScale + ' ]');
    var uno = new Array();
    var dos = new Array();
    uno = res.leftScale.split('').map(Number);
    dos = res.rightScale.split('').map(Number);

    if(res.leftScale.length === 1 && res.rightScale.length === 1 && res.leftScale[0] === res.rightScale[0]){
      var value = modules.quarterScale(uno, dos);
      if (value[0] === true && value[1] === true){
        process.stdout.write('\n Congratulations! You did it!');
        process.exit();
      }else{
        callback(console.log(modules.quarterScale(uno,dos)));
      }
    }else {
      callback(console.log(modules.quarterScale(uno, dos)));
    }
  });
};

game();