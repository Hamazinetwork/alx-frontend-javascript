//Advanced types Part 1
interface Director{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTask(): string;
}

class Director  {
    workFromHome(): string{
        return "Director is working from home"
    }
    getCoffeeBreak(): string{
        return "Director going for coffee break"
    }
    workDirectorTask(): string{
        return "Director working on tasks"
    }
}
 interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTask(): string;
 }

 class TeacherInterface{
   workFromHome(): string {
       return 'Can not work from home'
    }
    getCoffeeBreak(): string {
        return "can not taker a break"
    }
    workTeacherTask(){
        return "Getting to work"
    }
 }

 function createEmployee (salary: number | string): TeacherInterface | Director{
            if( typeof salary === "number" && salary < 500 ){
                return new TeacherInterface()
            }
            else {
                return new Director()
            }
        
 }
 //6. Creating functions specific to employees
    function isDirector(employee: TeacherInterface | Director): employee is Director {
        return (employee as Director).workDirectorTask !== undefined;}

    function executeWork(employee: TeacherInterface | Director): string {
        if (isDirector(employee)) {
            return employee.workDirectorTask();
        } else {
            return employee.workTeacherTask();
        }
    }

    //7. String literal types
function teachClass(todayClass:string){
    if(typeof todayClass === "string" && todayClass == "Math"){
        todayClass = "Math"
        return  "TeachingMath"
    }
    else{
        return "TeachingHistory"
    }

}

