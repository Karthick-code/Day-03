//1. How to compare two JSON Have the same properties without order.
let a = { name: "Person1", age: 5};
let b = { age: 5,name: "Person1"};
console.log(JSON.stringify(a)===JSON.stringify(b));

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
       
    //2. Use the RestCountries-Api(API-https://restcountries.com/v3.1/all) and display all the country flags in the console.
    for(var i in res){
        //  results are printed as png files.
        console.log(res[i].flags.png);
    }
    //3. Use the same RestCountries-Api to print all the Country names, Regions, Sub-regions, and Populations.
    for(var i in res){
        // results are printed in the "Country_name-Region-Sub_Region-Population" format.
        console.log(res[i].name.common,"-",res[i].region,"-",res[i].subregion,"-",res[i].population);
    }
}