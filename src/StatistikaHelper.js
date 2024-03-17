function calcuteMeanGroup(tb, n, fs, p){
    p = (tb[1] - tb[0]) + 1;
    let me = (tb[0] - 0.5) + (((n - fs) / tb[2]) * p)
    return me;
}

function calculateModusGroup(tb, d1, d2, p){
    return tb + (d1/(d1+d2)) * p
}

function findModusF(datas){
    let temp = 0;
    let dataF;
    let dataFIndex = 0;
    let lastIndex = datas[0].length - 1;
    for(let i = 0; i < datas.length; i++){
        if(temp < datas[i][lastIndex]){
            temp = datas[i][lastIndex]
            dataF = datas[i]
            dataFIndex = i
        }
    }
    return {dataF, index:dataFIndex};
}

function convertData(data) {
    let dataconvert = [];

    data.forEach(item => {
        let convertedItem = item[0].split('-').map(Number);
        convertedItem.push(item[1]);
        dataconvert.push(convertedItem);
    });

    return dataconvert;
}

module.exports = {calcuteMeanGroup, convertData, findModusF, calculateModusGroup}