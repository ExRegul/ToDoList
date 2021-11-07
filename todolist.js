
const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   };  
   
   function changeStatus(keyObject, valueObject){
       if (keyObject in list) {
           list[keyObject] = valueObject;
       }else {console.log("ошибка изменения статуса! такой задачи нет");};
   }
   function addTask(keyObject){
       list[keyObject] = "To Do";
   }
   function deleteTask(keyObject){
       if (keyObject in list) {
           delete list[keyObject];
       } else {
           console.log("ошибка удаления задачи! такой задачи нет");
       }
   }
   function printKeyToStatus(value){
      let countValue = 0;
      for (const key in list) {
        if (list[key] === value) {
            console.log(' ' + key);
            countValue++;
        } 
      }
    if (countValue == 0) console.log(' -'); 
   }
   function showList (){
       console.log("ToDo:");
       printKeyToStatus("To Do");
       console.log("In Progress:");
       printKeyToStatus("In Progress");
       console.log("Done:");
       printKeyToStatus("Done");
   }
   //deleteTask('have a walk');
   addTask('have a walk');
   changeStatus("make a bed", "In Progress");
   
   console.log(showList());