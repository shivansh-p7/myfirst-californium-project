const date=new Date()
const day=date.getDate()

const month=date.getMonth()+1

function prints(){
    console.log(`Californium, W3D4, the topic for today is Nodejs module system`)
}
module.exports.givesDate=day
module.exports.givesMonth=month
module.exports.printsText=prints
