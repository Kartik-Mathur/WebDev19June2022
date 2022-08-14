var p = {
    then: function(cb,rj){
        cb('This is thenable');
        rj('This is not good');
    }
}

p.then(function(v){
    console.log(v);
},function(v1){
    console.log(v1);
})