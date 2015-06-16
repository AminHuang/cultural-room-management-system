var Apply = require('./../models/Apply.js');

exports.apply = function(req, res){
  res.render('apply', { title: '申请' });
};

exports.applyAdd = function(req, res) {
  var json = req.body.content;
  console.log(json);
  var old = Apply.findByNameAndDate(json.apply_room, json.apply_date, function(err,obj){
    console.log(obj);
    if(obj.length == 0) {
        console.log("len0");
      var apply = Apply.save(json, function(err){
        if(err) {
            console.log("len0saveok");
          res.send({'success':false, 'err':err});
        } else {
            console.log("len0saveno");
          res.send({'success': true});
        }
      });
    } else {
      console.log("len1");
      var flag = true;
      for(var i = 0; i < obj.length; i++) {
        var tmp = obj[i];
        console.log(tmp);
        console.log(tmp.end_time);
        console.log(json.start_time);
        if(tmp.end_time >= json.start_time || tmp.start_time <= json.end_time) {
            console.log("len1no");
            flag = false;
          res.send({'success':false});
          break;
          
        }
      }
      if(flag) {
        var apply = Apply.save(json, function(err){
          if(err) {
            console.log("len1saveok");
            res.send({'success':false, 'err':err});
          } else {
            console.log("len1saveno");
            res.send({'success': true});
          }
        });
      }
    }



  });
};

