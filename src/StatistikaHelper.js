function calcuteMeanGroup(tb, n, fs, p){
    p = (tb[1] - tb[0]) + 1;
    let me = (tb[0] - 0.5) + (((n - fs) / tb[2]) * p)
    return me;
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

module.exports = {calcuteMeanGroup, convertData}