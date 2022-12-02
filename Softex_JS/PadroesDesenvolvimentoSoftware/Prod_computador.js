/*
const user = {
    userName: 'Miguel Germano',
    avatar: 'img.png'
};

console.log(user.userName); // "Miguel Germano"

const key = 'avatar';

console.log(user[key]); // "img.png"

*/

// ----------------------------------
// ----------------------------------

/*
If you have variables in-scope with the same name as your intended property names, 
you can omit the colon and the value in the object literal creation:
*/

const userName = 'Miguel Germano';
const avatar = 'img.png';

const user = {
    userName,
    avatar,

    setUserName (userName) {
        this.userName = userName;
        return this;
    }
};

console.log(user.setUserName('Foo').userName); // "Foo"