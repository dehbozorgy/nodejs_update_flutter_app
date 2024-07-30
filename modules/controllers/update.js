const updatemodel = require('./../modeles/update');

module.exports = new class updateControl {

    async lastversion(req,res){

        try {

            const lastversion = (await updatemodel.find({},'-_id -__v')).at(-1);

            res.json({
                'data':lastversion,
                'success':true
            });

        }
        catch (e) {

            res.json({
                'data':e,
                'success':false
            });

        }

    }

    async add(req, res) {

        try {

            const {version,force} = await updatemodel({
                'version':req.body.version,
                'force':req.body.force
            }).save();

            res.json({
                'data':{
                    'version':version,
                    'force':force
                },
                'success':true
            });

        }
        catch (e) {

            res.json({
                'data':e,
                'success':false
            });

        }

    }

}