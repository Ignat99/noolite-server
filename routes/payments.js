 
/*
 * POST payments notification callbacks.
 */

exports.notification = function(req, res){
  console.log('notification', req.body);
  //console.log(res);
  res.status(200);
  res.send('Ok');
};
