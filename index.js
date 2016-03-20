var async = require('async');
var prompt = require('prompt');

var modules = require('./script');

var quarters = [1,1,1,1,1,1,1,1];

async.series([
  function(callback){
    prompt.start();

    modules.randomizeQuarters();

    prompt.get(['leftScale', 'rightScale'], function(err, res){
      if (err){return onErr(err)}
      console.log('you have two more tries');
      console.log('[ ' + res.leftScale + ', ' + res.rightScale + ' ]');
      var uno = new Array();
      var dos = new Array();
      uno = res.leftScale.split('').map(Number);
      dos = res.rightScale.split('').map(Number);

      callback(console.log(modules.quarterScale(uno, dos)));
    });

  },

  function (callback){
    prompt.start();
    prompt.get(['leftScale', 'rightScale'], function(err, res){
      if (err){return onErr(err)}
      console.log('you have one more tries');
      console.log('[ ' + res.leftScale + ', ' + res.rightScale + ' ]');
      var uno = new Array();
      var dos = new Array();
      uno = res.leftScale.split('').map(Number);
      dos = res.rightScale.split('').map(Number);

      callback(console.log(modules.quarterScale(uno, dos)));
    });
  },

  function (callback){
    prompt.start();
    prompt.get(['leftScale', 'rightScale'], function(err, res){
      if (err){return onErr(err)}
      console.log('[ ' + res.leftScale + ', ' + res.rightScale + ' ]');
      var uno = new Array();
      var dos = new Array();
      uno = res.leftScale.split('').map(Number);
      dos = res.rightScale.split('').map(Number);

      callback(console.log(modules.quarterScale(uno, dos)));
    });
  }

  ],
  function(err, results){
    console.log('you have ran out of tries! Please try again!');
  });


function onErr(err){
  console.log(err);
  return 1;
}