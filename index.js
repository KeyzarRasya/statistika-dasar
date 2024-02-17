const Statistika = require("./Statistika")

const newData = new Statistika();

const data = [
    [130,134,2],
    [135,139,7],
    [140,144,12],
    [145,149,10],
    [150,154,14],
    [155,159,8],
    [160,164,7]
]

const data2 = [
    [61,70,8],
    [71,80,17],
    [81,90,20],
    [90,100,15]
]

const data3 = [
    [30,39,3],
    [40,49,5],
    [50,59,2],
    [60,69,13],
    [70,79,25],
    [80,89,12],
    [90,99,20]
]

const data4 = [
    ["30-39",3],
    ["40-49",5],
    ["50-59",2],
    ["60-69",13],
    ["70-79",25],
    ['80-89',12],
    ["90-99",20]
]




const dataMean = newData.meanGroup(data4, (data) => {
    return data
});

console.log(dataMean)