var restify = require('restify');

var server = restify.createServer({
  name: 'eight-quarters',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

var count = 0;

var quarters = [1,1,1,1,1,1,1,1];

var firstArr = [];
var secondArr = [];

function randomizeQuarters(){
  quarters = [1,1,1,1,1,1,1,1];
  var random = Math.floor(Math.random()*quarters.length);
  quarters[random] = 2;
  console.log(quarters);
}

function quarterScale(one, two){
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

server.get('/quarters', function (req, res, next){
  var uno = req.query.first.split(',');
  var dos = req.query.second.split(',');

  firstArr.push(req.query.first.split(','));
  secondArr.push(req.query.second.split(','));

  if(count === 0){
    randomizeQuarters();
    count++;
    res.send(quarterScale(uno, dos));
  }else if (count > 0 && count < 3){
    count++
    res.send(quarterScale(uno, dos));
  }else if (count === 3){
    randomizeQuarters();
    count = 0;
    res.send('sorry, try again! ... Mixing Quarters...');
  }

  res.send(quarterScale(uno, dos));

  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});