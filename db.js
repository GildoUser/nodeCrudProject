const db = [
    {   
        id:"1",
        name:"Aurélio da Silva Santos",
        age: 21,
        city: "SP",
        email: 'aureliosilva@gmail.com'
    }
]
function findUsers(){
    return db
}

function findUser(userId){
    for(let i=0; i< db.length; i++){
        if (userId === db[i].id){
            return db[i]
        }
    }
    return "Nothing was found"
}

function createUser(user){
    db += user
    return 200
}

function updateUser(userId,userData){
    for(let i=0; i < db.length; i++){
        if(userId == db[i].id){
            db[i] = {userData} 
            console.log(db[i],"ahisdoauh")
        }
    }
}

console.log(updateUser('1',{
    age: 22,
    city: "SP",
    email: 'aureliosilva@gmail.com'}))
module.exports = findUsers;