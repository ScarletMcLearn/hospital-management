
router.get('/app/swappatients/:patientWithRoom/:patientWithoutRoom', (req, res) => {
    var patientWithRoom = req.params.patientWithRoom;
    var patientWithoutRoom = req.params.patientWithoutRoom;

    Promise.all([Patient.findOne({hospitalNumber: patientWithRoom}), Patient.findOne({hospitalNumber: patientWithoutRoom})])
        .then((data) => {
            var patientWithRoom = data[0];
            var patientWithoutRoom = data[1];
            if (patientWithRoom && patientWithoutRoom && patientWithRoom["room"] !== 'noroom' && patientWithoutRoom["room"] === 'noroom') {
                var roomOfPatient = patientWithRoom["room"];

                patientWithRoom.room = "noroom";
                patientWithRoom.save();

                patientWithoutRoom.room = roomOfPatient;
                patientWithoutRoom.save();

                res.redirect('/app');
            } else {
                throw Error("Bad request to change the room. Check the parameters.");
            }
        }).catch((err) => {
            console.log(err);
            res.redirect('/app');
        });
});
