var Sequelize = require('sequelize');
var sequelize = new Sequelize('table1', 'root', 'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: false
        //false
        //true 
    }
);

var User = sequelize.define('user', {
    firstName: Sequelize.STRING,
    lastName:  Sequelize.STRING,
    login: Sequelize.STRING,
    password:  Sequelize.TEXT,
    mail: Sequelize.STRING,
    dateOfBirth: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    
});

var Table = sequelize.define('table', {
    name:  Sequelize.STRING,
    language: Sequelize.STRING,
    genres:  Sequelize.STRING,
    status: Sequelize.STRING,
    rating: Sequelize.STRING,
    key: {type: Sequelize.STRING, 
        unique: true
    }
})

Table.beforeCreate(function(model, options) {
    return new Promise ((resolve, reject) => {
        var shajs = require('sha.js')
        model.key = shajs('sha256').update(`${Math.random}${(new Date()).toString()}${this.name}${this.genres}`).digest('hex')
        resolve(model, options)
    });
})

User.hasMany(Table)
Table.belongsTo(User)

// fillDB()
// sequelize.sync()

async function fillDB(){
    await sequelize.sync()
    
    var user1 = await User.create( {
                            firstName: 'Vasya',
                            lastName:'Petrov',
                            login: 'First',
                            password: '123456',
                            mail: 'petrov@ya.com',
                            dateOfBirth: '11.11.2011',
                            phoneNumber: '+38-033-33-33-333'
                        })
    var user2 = await User.create(
                        {
                            firstName: 'Fedya',
                            lastName:'Ivanov',
                            login: 'First',
                            password: '123456',
                            mail: 'ivanov@ya.com',
                            dateOfBirth: '22.12.2012',
                            phoneNumber: '+38-022-22-22-222'
                        })
    
    var tableUs1 = await Table.create(
                        {
                            name: 'girls',
                            language:'english',
                            genres: 'drama',
                            status: 'running',
                            rating: 0
                        })
    
    user1.addTable(tableUs1)
       
    var tableUs2 = await Table.create(
                        {
                            name: 'boys',
                            language:'english',
                            genres: 'action',
                            status: 'running',
                            rating: 0
                        })
    
    user2.addTable(tableUs2)
}


var express = require('express');
const cors  = require('cors')
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
//
var schema = buildSchema(`
    type Query {
        table(id: String!, userId: Int!): Table
        user(id: Int!): User
        users: [User]
    }

    type User {
        id: Int
        firstName: String
        lastName: String
        login: String
        password:  String
        mail: String
        dateOfBirth: String
        phoneNumber: String
        timestamp: Int,
        userId: Int
        
    }

    type Table {
        id: Int
        name: String
        language: String
        genres: String
        status: String
        rating: String
        key: String
        tableId: Int
        userId: Int
    }

    type Mutation {
        createUser(login: String!, mail: String!, password: String!, firstName: String!, lastName: String!, dateOfBirth: String!, phoneNumber: String!): User
        createTable(userId: Int!, name: String!, language: String!, genres: String!, status: String!, rating: String!): Table
        updateUser(userId: Int!, mail: String!, login: String!, firstName: String!, lastName: String!, password: String!, dateOfBirth: String!, phoneNumber: String!): User
        updateTable(tableId: String!, userId: Int!, name: String!): Table
    }
    
    
`);

async function getTable({id}){
    let table = await Table.findOne({
        where: {
            key: id
        }
    })
    return table;
}

async function updateTable(args){
    console.log(args);
    let id = args.tableId
    let name = args.name
    var table = await Table.findOne({
        where: {
            key: id
        }
    })
    if (table){
        table.update({name})
console.log("success");
    }
    else{
       console.log("error");
    }
    return table;
}

async function updateUser(args){
    console.log(args);
    let id = args.userId
    let firstName = args.firstName
    let lastName = args.lastName
    let login = args.login
    let mail = args.mail
    let password = args.password
    let dateOfBirth = args.dateOfBirth
    let phoneNumber = args.phoneNumber
    var user = await User.findById(id)
    if (user){
        user.update({firstName})
        user.update({lastName})
        user.update({mail})
        user.update({login})
        user.update({password})
        user.update({dateOfBirth})
        user.update({phoneNumber})
console.log("success");
    }
    else{
       console.log("error");
    }
    return user;
}

// async function getUser(args){
//     console.log(args);
//     let id = args.userId
//     let login = args.login
//     let password = args.password
//     var user = await User.findById(id)
//     if (login && password){
//         console.log("success");
//         console.log(args);
//     }
//     else{
//        console.log("error");
//     }
//     return user;
// }

// function getUser(args){
//     let id = args.id
//     let user = User.findById(id)
//     if (user){
//         console.log("success");
//     }
//     else{
//        console.log("error");
//     }
//     return user;
// }

function getUser(args){
    let id = args.id
    return User.findById(id)
}


async function createUser({login, mail, password, firstName, lastName, dateOfBirth, phoneNumber}){
    return User.create({login, mail, password, firstName, lastName, dateOfBirth, phoneNumber})
}

async function createTable({userId, name, language, genres, status, rating}){
    let user    = await User.findById(userId)
    let table = await Table.create({name, language, genres, status, rating})
    user.addTable(table)
    return table
    // console.log(userId)
}

async function getUsers(args){
    let users = await User.findAll({})
    for (let user of users){
        user.timestamp = user.createdAt.getTime()/1000
    }
    return users;
}

// Root resolver
var root = {
    table: getTable,
    user: getUser,
    users: getUsers,
    createUser,
    createTable,
    updateTable,
    updateUser
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors())

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));





// mutation createUser($login: String!, $mail:String!, $password: String!) {
//   createUser(login: $login, mail: $mail, password: $password) {
//      login
//      password
//   }
// }

// mutation createTable($userID:String!, $text:String!) {
//   createTable(userID: $userID, title: $title, code: $code) {     
//      title
//      code
//   }
// }


// function getUserTable(args){
//     let id = args.id
//     return User.findById(id)
//     .then( user => user.getTable() )
//     .then( tables => tables.filter(table => !table.tableId))
// }










 