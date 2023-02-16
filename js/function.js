let submit = document.getElementById("submit")
let reset = document.getElementById("reset")
submit.addEventListener("click", alertMessage);
reset.addEventListener("click", cancleAll);

function alertMessage() {
    const name = document.querySelector('input[type="text"]').value;

    const movies = document.querySelectorAll('input[value="movie"]:checked');

    const numberOfMovies = movies.length

    alert(`${name}님,  저와 ${numberOfMovies}개의 취향이 같으시네요!`)
}

function cancleAll() {
    document.querySelector('input[type="text"]').value = "";

    let movies = document.getElementsByClassName("movieCheck");
    for(let i=0;i<movies.length;i++){
        movies[i].checked = false;
    }
}