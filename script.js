const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");

const triviaElement = document.getElementById("trivia-text");

const searchBtn = document.getElementById("search");

const getTrivia = async(day,month)=>{

    const apiTrivia = `http://numbersapi.com/${month}/${day}/date`;

    const res = await fetch(apiTrivia);
    const data = res.text();

    console.log(data);
    return data;
}


const showTrivia = async (day, month)=> {
    const show = await getTrivia(day, month);

    fetch(
        `https://api.mymemory.translated.net/get?q=${show}&langpair=en-GB|pt-BR`
      )
        .then((res) => res.json())
        .then((data) => {
            triviaElement.innerText = data.responseData.translatedText;
        });
}

searchBtn.addEventListener("click", (e)=> {
    e.preventDefault();

    const day = dayInput.value;
    const month = monthInput.value;

    console.log(day);
    console.log(month);

    showTrivia(day, month);

})