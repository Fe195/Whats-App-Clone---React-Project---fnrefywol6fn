// const faker = require('faker')
import { faker } from '@faker-js/faker';

class User {
    constructor() {
        // this.id = faker.random.uuid()
        // this.name = faker.name.findName()
        // this.avatar = faker.internet.avatar()
        this.id= faker.datatype.uuid()
        this.name= faker.internet.userName()        
        this.avatar= faker.image.avatar()
    }
}
export class Message {
    constructor(isMainUser, msg, date) {
        this.id = faker.datatype.uuid()
        this.msg = msg || faker.word.adjective(faker.random.locale([...Array(20).keys()]))
        this.isMainUser = isMainUser
        this.date = date || faker.date.recent()
    }
}

export const mainUser = new User()

export const contacts = [...Array(20).keys()].map(() => new User())

export const contactsMessages = contacts.map((contact) => {
    return {
        contact,
        messages: [...Array(6).keys()]
            .map((_, i) => {
                return (i + 1) % 2 === 0 ? new Message(true) : new Message(false)
            })
            .filter((m) => m.msg),
    }
})






// ==============================
// const User = [
//   {
//     name: "Varun",
//     profilePic: "img1.jpg",
//     messages: [
//       { message: "Hello Friend . How are you ?", from: "self" },
//       { message: "I am good how are you ?", from: "me" },
//       { message: "Doing Good", from: "self" },
//       { message: "When is our Exam ?", from: "self" },
//     ],
//   },
//   {
//     name: "Anurag",
//     profilePic: "img2.jpg",
//     messages: [
//       { message: "Where are you?", from: "self" },
//       { message: "I am in school", from: "me" }
//     ],
//   },
// ];


// export const mainUser=new User();

// function name(){
// obj={message:"",from:""}
// obj.message="The exam is on friday";
// obj.from="me";
// Profiles[0].messages.push(obj)
// }
