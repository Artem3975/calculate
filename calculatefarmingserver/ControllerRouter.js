import Calculate from "./Calculate.js";

class ControllerRouter{
    async post(req,res){
        const {curs1, curs2,amount1,amount2}=req.body;
        console.log(req.body);
        const request={
            percent:Calculate.calc(curs1, curs2,amount1,amount2)
        }

        res.status(200).json(request)
    }
    async get(req,res){
        res.status(200).json('get')
    }

}
export default new ControllerRouter();