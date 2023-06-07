const clientID = "clientID";
const clientSecret = "clientSecret";
exports.index = function(req, res, next) {
    //console.log(req);
    const ID = req.query.username;
    const secret = req.query.password;
    console.log("checking authentication", JSON.stringify(req.query));
    if (ID == clientID && secret == clientSecret) {
        res.json({token: "good"});
    } else {
        res.json({token: "bad"});
    }
}