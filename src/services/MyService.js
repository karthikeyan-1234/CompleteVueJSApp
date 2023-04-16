import axios from "axios";

export class MyService{
    async getallData(){
        return await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    }
}