function solve(company,place) {
    console.log(this);
    console.log(company + place);
}

let movie = {
    name:"3-Idiots",
    actor: ["Amir khan","kareena kapoor"]
};

solve();
solve.call(movie);
solve.apply(movie,["CB","Kohat"]);

let solveFun = solve.bind(movie);
solveFun();