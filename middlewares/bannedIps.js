//banned IPS
const bannedIps = ['8.8.8.8'];

module.exports = function (req, res, next) {
  const ip = req.ip;

  if (bannedIps.includes(ip)) {
    res.send('You are banned.');
    return;  //print 'you are banned'
  }

  next();
};
