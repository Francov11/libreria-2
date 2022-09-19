var Student = /** @class */ (function () {
    function Student(pName, pSurname, pMathNote, pPshysicsNote, pPhilosophyNote) {
        this.name = pName;
        this.surname = pSurname;
        this.mathNote = pMathNote;
        this.pshysicsNote = pPshysicsNote;
        this.philosophyNote = pPhilosophyNote;
    }
    Student.prototype.setStudent = function (newName, newSurname) {
        this.name = newName;
        this.surname = newSurname;
    };
    Student.prototype.getStudentName = function () {
        return this.name + ' ' + this.surname;
    };
    Student.prototype.setMathNote = function (pMathNote) {
        this.mathNote = pMathNote;
    };
    Student.prototype.setPshysicsNote = function (pPshysicsNote) {
        this.pshysicsNote = pPshysicsNote;
    };
    Student.prototype.setPhilosophyNote = function (pPhilosophyNote) {
        this.philosophyNote = pPhilosophyNote;
    };
    /* funcion para que el alumno pueda consultar su nota en las materias que esta enrrolado */
    Student.prototype.getStudentNote = function (assignature) {
        if (assignature === 'Matematica') {
            if (this.mathNote >= 7) {
                return "".concat(this.getStudentName(), " aprob\u00F3 ").concat(assignature, " con un ").concat(this.mathNote, ".");
            }
            else {
                return "".concat(this.getStudentName(), " desaprob\u00F3 ").concat(assignature, " con un ").concat(this.mathNote, ".");
            }
        }
        if (assignature === 'Fisica') {
            if (this.pshysicsNote >= 7) {
                return "".concat(this.getStudentName(), " aprob\u00F3 ").concat(assignature, " con un ").concat(this.pshysicsNote, ".");
            }
            else {
                return "".concat(this.getStudentName(), " desaprob\u00F3 ").concat(assignature, " con un ").concat(this.pshysicsNote, ".");
            }
        }
        if (assignature === 'Filosofia') {
            if (this.philosophyNote >= 7) {
                return "".concat(this.getStudentName(), " aprob\u00F3 ").concat(assignature, " con un ").concat(this.philosophyNote, ".");
            }
            else {
                return "".concat(this.getStudentName(), " desaprob\u00F3 ").concat(assignature, " con un ").concat(this.philosophyNote, ".");
            }
        }
        if (assignature === undefined) {
            return "".concat(this.getStudentName(), " ingrese una materia para saber su nota.");
        }
        else {
            return "".concat(this.getStudentName(), " no esta matriculado en la materia que busca, ingrese una materia valida.");
        }
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(pNameTeacher, psurnameTeacher, pAssignatureTeacher, pStudent) {
        this.studentList = pStudent;
        this.nameTeacher = pNameTeacher;
        this.surnameTeacher = psurnameTeacher;
        this.assignatureTeacher = pAssignatureTeacher;
    }
    Teacher.prototype.setTeacher = function (pNameTeacher, psurnameTeacher, pAssignatureTeacher) {
        this.nameTeacher = pNameTeacher;
        this.surnameTeacher = psurnameTeacher;
        this.assignatureTeacher = pAssignatureTeacher;
    };
    Teacher.prototype.getTeacher = function () {
        return "".concat(this.surnameTeacher, " ").concat(this.nameTeacher, ", asignatura ").concat(this.assignatureTeacher, ".");
    };
    return Teacher;
}());
var College = /** @class */ (function () {
    function College(pCollegeName, pTeacherList, pStudentList) {
        this.collegeName = pCollegeName;
        this.teacherList = pTeacherList;
        this.studentList = pStudentList;
    }
    College.prototype.getCollegeName = function () {
        return this.collegeName;
    };
    College.prototype.setCollegeName = function (newCollegeName) {
        this.collegeName = newCollegeName;
    };
    /* funcion para que el colegio pueda contratar a un nuevo profesor y asignarle sus alumnos */
    College.prototype.hireNewTeacher = function (pName, pSurname, pAssignature) {
        var newTeacher = new Teacher(pName, pSurname, pAssignature, studentList);
        this.teacherList.push(newTeacher);
        console.log("Se ah contratado al profesor ".concat(pName + ' ' + pSurname, " que se desempe\u00F1a en la asignatura ").concat(pAssignature, "."));
        return newTeacher;
    };
    /* funcion para que el colegio pueda despedir a un profesor*/
    College.prototype.fireTeacher = function (pTeacher) {
        var teacher = pTeacher.getTeacher();
        for (var i = 0; i < this.teacherList.length; i++) {
            if (pTeacher.getTeacher() === this.teacherList[i].getTeacher()) {
                this.teacherList.splice(i, 1);
                return "El profesor ".concat(teacher, " ah sido despedido.");
            }
            else {
                return "El profesor ".concat(teacher, " no esta contratado en la institucion.");
            }
        }
    };
    /* funcion para que el colegio pueda matricular a un nuevo alumno*/
    College.prototype.enrollStudent = function (pName, pSurname) {
        var newStudent = new Student(pName, pSurname, 0, 0, 0);
        this.studentList.push(newStudent);
        console.log("Se ah matriculado al alumno ".concat(pName + ' ' + pSurname, "."));
        return newStudent;
    };
    /* funcion para que el colegio pueda remover a un alumno*/
    College.prototype.removeStudent = function (pName) {
        var student = pName.getStudentName();
        for (var i = 0; i < this.studentList.length; i++) {
            if (pName.getStudentName() === this.studentList[i].getStudentName()) {
                this.studentList.splice(i, 1);
            }
        }
        return "El alumno ".concat(student, " ah sido removido de la instituci\u00F3n.");
    };
    return College;
}());
/* Listado de alumnos matriculados */
var student1 = new Student('Juan', 'Rodriguez', 9, 7, 5);
var student2 = new Student('Jose', 'Frias', 6, 9, 5);
var student3 = new Student('Maria', 'Gutierrez', 7, 7, 8);
var student4 = new Student('Leandro', 'Fernandez', 2, 10, 5);
var student5 = new Student('Ana', 'Lencina', 10, 7, 8);
var studentList = [student1, student2, student3, student4, student5];
/* Listado de profesores activos */
var mathTeacher = new Teacher('Hernan', 'Ibarra', 'Matemática', studentList);
var philosophyTeacher = new Teacher('Salvador', 'Flores', 'Filosofia', studentList);
var pshysicTeacher = new Teacher('Mirta', 'Salvattori', 'Fisica', studentList);
var teacherList = [philosophyTeacher, mathTeacher, pshysicTeacher];
/*Colegio */
var college = new College('San Martin', teacherList, studentList);
var scienceTeacher = college.hireNewTeacher('Juan', 'Rodriguez', 'Ciencia');
var student6 = college.enrollStudent('Juan', 'Blanco');
/*Se prueban las instancias de cada objeto */
console.log(scienceTeacher.getTeacher());
console.log(student3.getStudentNote('Matematica'));
console.log(scienceTeacher);
console.log(teacherList);
console.log(studentList);
console.log(college.fireTeacher(pshysicTeacher));
console.log(college.removeStudent(student4));
console.log(student6.getStudentName());
