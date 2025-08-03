
// Prototype:


// Assigning a method to the top-level Object so that the property 
// can be accessible to any child (any lower level) of that object

const myArray = [ "GSOC" , "MLN", "Atlasian"];
const myString = "Open Source";

const myObj = {
    username: "shivraj",
    gender : "male",

    getUsername : function(){
        console.log(this.username);
    }
}

//assigning method to top level Object : 
//so that the property can be accessible to any child(any lower level) of that object
Object.prototype.shivraj = function(){
    console.log("shivraj is present in all objects");
}

// myArray.shivraj();
// myString.shivraj();
// myObj.shivraj();



// -------------------------------------------------------------

// Use this approach to assign a method to a specific object/array/string

// If we assign the method to a particular child, 
// The parent level cannot access the assigned method
// Its parent level cannot access the assigned method.



const myArray2 = [ "GSOC" , "MLN", "Atlasian"];
const myString2 = "Open Source";

Array.prototype.sayShivraj = function(){
    console.log("Hello Shivraj");
}

myArray2.sayShivraj();// Hello Shivraj

// myString2.sayShivraj();
// sayShivraj method can't accesiible by string
// because it is assigned to the Array




// -------------------------------------------------------------

//*********************************** Inheritance: *****************************************


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport                  //   properties of TeachingSupport will be inherited by TASupport
}

// ************************************* modern syntax:******************************************   

// properties of User will be inherited to Teacher
// teacher can access properties of User
// teacher is inherited from User
Object.setPrototypeOf(Teacher, User);

// TeachingSupport can now access properties and methods directly on Teacher, 
// such as static properties and methods.
Object.setPrototypeOf(TeachingSupport, Teacher);



// -------------------------------------------------------------


let anotherUsername = "Shivraj     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"shivrajtaware".trueLength();
"opesource     ".trueLength();