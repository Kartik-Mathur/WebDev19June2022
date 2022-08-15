function chopping(vegetables,sabziBanna){
    console.log('...chopping karna start of '+vegetables);
    setTimeout(()=>{
        console.log('...chopping done');
        let choppedVegetables = 'Chopped '+vegetables;
        sabziBanna(choppedVegetables); // Yeh ek callback hai, vegetables chop
        // huye and sabziBanna start
    },3000);
}

chopping("Aaloo",function(choppedVegetables){
    console.log('...Sabzi banana start with '+choppedVegetables);
    setTimeout(()=>{
        console.log('...Sabzi banana done');
    },3000);   
});