import Calculate from "./Calculate.js";

class ControllerRouter{
    async post(req,res){
        const {price1, price2,token1,token2}=req.body;
        console.log(req.body);
        const request={
            percent:Calculate.calc(price1, price2,token1,token2)
        }

        res.status(200).json(request)
    }
    async get(req,res){
        res.status(200).json('get')
    }

}
export default new ControllerRouter();