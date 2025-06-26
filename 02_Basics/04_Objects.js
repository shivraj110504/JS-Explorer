// singleton object
// const obj1 = new Object()

// non singleton object
// const obj2 = {}
// console.log(obj2) // {}



//adding the key , value into the empty object

const linkedIn = {}

linkedIn.name ="shivrajtaware";
linkedIn.gmail= "shivraj@linkedin.com";
linkedIn.longestStrike = '35 days';

// console.log(linkedIn)   // => { name: 'shivrajtaware', gmail: 'shivraj@linkedin.com', longestStrike: '35 days'}




// *************** Defining object inside the object ********************

const details = {
    name: "Shivraj",
    socialMedia : {
        linkedin: "shivrajtaware",
        gitHub : {
            username:"shivraj",
            gitRepos:{
                repoName:['js-exploer', 'javadsa', 'portfolio']
            }
        }
    }
}

// console.log(details.name)  // => Shivraj
// console.log(details.socialMedia.gitHub.gitRepos.repoName[2])  // => portfolio
// console.log(details.socialMedia.gitHub.gitRepos.repoName)  // => [ 'js-exploer', 'javadsa', 'portfolio' ]
// console.log(details.socialMedia.gitHub)  // => { username: 'shivraj', gitRepos: { repoName: [ 'js-exploer', 'javadsa', 'portfolio' ] }}




// ************************* Merge/concatenating the objects ***********************

const obj1 = {1:'s' , 2: 'h'};
const obj2 = {3:'i' , 4: 'v'};

// const obj3 ={ obj1 , obj2};
// console.log(obj3); // => { obj1: { '1': 's', '2': 'h' }, obj2: { '3': 'i', '4': 'v' } }




// const obj3 = Object.assign( obj1, obj2 );       // =>  { '1': 's', '2': 'h', '3': 'i', '4': 'v' } 
const obj3 = Object.assign({}, obj1, obj2 );       //   {} (act as => target:destination )  & obj1,obj2 ( act as => sources) 
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 





//using spread operator (...)
const obj4 = {...obj1 , ...obj2 }
// console.log(obj4); //=> { '1': 's', '2': 'h', '3': 'i', '4': 'v' }




//************* How the array of objects workd **********************

//it is very usefull when we fetch the data  (from database, it retuns array of object)
// by implementing the loop to the array (index)


const user =[
    {
        id: 1,
        name:"s"
    },
    {
        id: 2,
        name:"h"
    },
    {
        id: 3,
        name:"i"
    },
    {
        id: 4,
        name:"v"
    },
    
]

console.log(user[1].name);  // => h





//**************** HOw the object method works ******************
const myUser= {
    name : "shivraj",
    email: "shivraj@github.com",
    age : "21"
}

//***************if we want all keys of the object => => Object.keys(objName) brings the keys in array datatype****************

console.log(Object.keys(myUser));  // => [ 'name', 'email', 'age' ]
console.log(Object.values(myUser)); // => [ 'shivraj', 'shivraj@github.com', '21' ]





// *****************it shows of keys and value into the array format*****************

console.log(Object.entries(myUser));  // => [[ 'name', 'shivraj' ], [ 'email', 'shivraj@github.com' ], [ 'age', '21' ]]






// ***************to check is any key value is present in the object or not***********************

//  console.log(myUser.hasOwnProperty('name')); //true
//  console.log(myUser.hasOwnProperty('address')); //flase