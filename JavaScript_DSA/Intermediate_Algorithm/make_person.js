const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName=firstAndLast;
    this.setFirstName=function(first){
        let newArr=fullName.split(' ');
        newArr[0]=first;
        fullName=newArr.join(' ')
    }
    this.setLastName=function(last){
        let newArr=fullName.split(' ');
        newArr[1]=last;
        fullName=newArr.join(' ')
    }
    this.setFullName=function(name){
        fullName=name;
    }
    this.getFullName = function() {
        return fullName;
    };
    this.getFirstName=function(){
        let newArr=fullName.split(' ');
        return newArr[0];
    }
    this.getLastName=function(){
        let newArr=fullName.split(' ');
        return newArr[1];
    }
};
const bob = new Person('Bob Ross');
console.log(bob.getFullName());