function Fun(company,town){
    console.log(this);
    console.log("Inside Fun this points to " + this + " "+company+" "+town);
}
Fun();

obj = {
    firstName: 'Kartik',
    fun: function(){
        console.log(this);
        this.lastName = "Mathur";
        return this;
    }
}

let funCall = Fun.bind(obj);
funCall("Coding Blocks","Kohat");