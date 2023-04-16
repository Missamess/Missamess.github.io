    console.log ("Array of Employees")

let employees = '{ "employees" : [' +
'{ "firstname":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":40000 , "raiseeligibile":true , "wfh":true},' +
'{ "firstname":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":18500 , "raiseeligible":true , "wfh":false},' +
'{ "firstname":"Bill" , "department":"HR" , "designation":"Executive" , "salary":21200 , "raiseeligible":false , "wfh":false} ]}';
const obj = JSON.parse(employees);
    console.log(obj);
    console.log("Original Employees")
    console.log(obj["employees"].length);
    console.log(obj["employees"][0][employees]);


let t = 0;
for(let i=0; i<3; i++) {
    t += obj["employees"][i]["salary"];
}
    console.log("totaly salary = " + t);
    console.log("Company Information");
    let company = '{"Tech Stars":"www.techstars.site":"Array of All Employees" }';
    console.log(company);

obj["employees"].push( '{ "firstname":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":25600 , "raiseeligible":false , "wfh":false},')
console.log(obj);

console.log("totaly salary = " + t);
