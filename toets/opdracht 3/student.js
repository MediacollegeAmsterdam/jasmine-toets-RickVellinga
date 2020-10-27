function Student(naam, studentId, cijfer, klas) {

    let name = naam + 'Hi';
    let id = studentId;
    let cijfers = cijfer;
    let klasNaam = klas;

    this.getName = function (){
      return name;
    }

    this.setName = function (naam){
      name = naam;
    }

    this.getId = function (){
      return id;
    }

    this.setId = function (studentId){
      id = studentId;
    }

    this.getKlas = function (){
      return klasNaam;
    }

    this.setKlas = function (klas){
      klasNaam = klas;
    }

    this.getCijfers = function (){
      return cijfers;
    }
    //
    this.setCijfers = function (cijfer){
      cijfers = cijfer;
    }

}

let student = new Student('mijnNaam', '001', 'MD2B', 6);

student.setName("Rick");
student.setId("29215");
student.setKlas("MD2Aa");
student.setCijfers(10);

// student.setCijfers("MD2Aa");




console.log(student.getName());
console.log(student.getId());
console.log(student.getKlas());
console.log(student.getCijfers());
