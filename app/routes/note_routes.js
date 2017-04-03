//'use strict';

module.exports = function(app, db) {
    app.get('/students/:id', bla);

    function bla (req, res) {
        console.log('!!!!!!!!!');
        console.log(db.collection('students'));
        var details = { '_id': new ObjectID('1') };

        console.log(details);

        db.collection('students').findOne(details, function (err, item) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    }
};