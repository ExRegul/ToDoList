const DONE = "Done";
const InProgress = "In Progress";
const ToDo = "To Do";
const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   };  
   
   function changeStatus(key, value){
       if (key in list) {
           list[key] = value;
       }else {console.log("ошибка изменения статуса! такой задачи нет");};
   }
   function addTask(key){
       list[key] = ToDo;
   }
   function deleteTask(key){
      delete list[key];      
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
       console.log(ToDo + ':');
       printKeyToStatus(ToDo);
       console.log(InProgress + ':');
       printKeyToStatus(InProgress);
       console.log(DONE + ':');
       printKeyToStatus(DONE);
   }
   //deleteTask('have a walk');
   addTask('have a walk');
   changeStatus("make a bed", "In Progress");
   
    showList();                             