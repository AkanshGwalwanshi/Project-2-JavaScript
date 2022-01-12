const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// Using fetch API and promises

// const generateJokes = () => {

//     const setHeader =  {
//         headers: {
//             Accept: "application/json"
//         }
//     };

//     fetch('https://icanhazdadjoke.com/', setHeader)
//         .then((res) =>res.json()).then((data) => {
//                 jokes.innerHTML = data.joke;
//             })
//             .catch((error) =>{
//                 console.log(error);
//             })
// }

// Using async await and error handling

// for traditional functions

// async function generateJokes() {}

const generateJokes = async () => {

    try {

        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        };

        const res = await fetch("https://icanhazdadjoke.com/", setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;

    } catch (err) {
        console.log(err);
    }
}

jokeBtn.addEventListener('click', generateJokes);

generateJokes();
