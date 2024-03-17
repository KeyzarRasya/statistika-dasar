const {convertData, findModusF, calculateModusGroup} = require("./src/StatistikaHelper")

class Statistika {
    constructor(){

    }

    meanGroup(datas, callback){
        datas = convertData(datas)
        let p = 0;
        let n = 0;
        let tb = [];
        let fk = []
        let fs;
        let counter = 0;
        for(let data of datas){
            n += data[2];
        }
        n = n / 2;
        for(let data of datas){        
            counter+=data[2];
            fk.push(counter)
        }
        for(let i = 0; i < datas.length; i++){
            datas[i].push(fk[i])
        }
        for(let i = 0; i < datas.length; i++){
            if(n < datas[i][3]){
                fs = datas[i-1][3]
                tb = datas[i]
                p = (tb[1] - tb[0]) + 1;
                const left = (tb[0] - 0.5);
                const right = (((n - fs) / tb[2]) * p)
                let me = left + right
                return callback(me);
            }
        }
        callback({message:"Calculating failure"});
    }

    modusGroup(datas, callback){
        datas = convertData(datas)
        let tb, p, d1, d2 = 0;
        const {dataF, index} = findModusF(datas);
        tb = dataF[0]-0.5;
        d1 = dataF[dataF.length-1] - datas[index-1][dataF.length-1]
        d2 = dataF[dataF.length-1] - datas[index+1][dataF.length-1]
        p = (dataF[1] - dataF[0]) + 1;
        const mo = calculateModusGroup(tb, d1, d2, p);
        return callback(mo)
    }
}

module.exports = Statistika;