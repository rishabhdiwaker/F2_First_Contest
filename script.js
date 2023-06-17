/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map( (element) => {
        if(element.profession === "developer"){
            console.log(element);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach( (element) => {
        if(element.profession === "developer"){
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let getid = arr.length;
    let newarr = {id:getid+1,name:"heera thakur",age:"35",profession:"founder"};
    arr.push(newarr);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter( (element) => {
        if(element.profession !== "admin"){
            console.log(element);
        }
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let entrepreneur = [
        { id: 4, name: "ramu", age: "26", profession: "store owner" },
        { id: 5, name: "lucy", age: "24", profession: "organizer" },
        { id: 6, name: "jumman", age: "21", profession: "businessman" }
      ];
      let add_Arr = arr.concat(entrepreneur);  
      console.log(add_Arr);
  }