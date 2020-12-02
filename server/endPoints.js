const { conditionModel } = require('../DB/conditionModel');

const endPoints = (router) => {
    router.post('/send_config', sendConfig);

    return router;
}

const sendConfig = async (req, res) => {
    try {
        let form = req.body.form;
        let condition = new conditionModel();
        condition.power = form.power;
        condition.control = form.control;
        condition.corpus = form.corpus;
        condition.signal = form.options.signal;
        condition.led = form.options.led;
        condition.dispetcher = form.options.dispetcher;
        condition.createDate = new Date();

        await condition.save();

        res.status(200);
    } catch(e) { 
        console.log(e)
        res.status(202);
        res.json({ err: e.toString() });
    }
}

module.exports = endPoints;