const quns = [
    {
        'q': "Which of the following is a markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JAVA",
        'd': "C",
        'ans': "a"
    },
    {
        'q': "What does HTML stand for?",
        'a': "Home Tool Markup Language",
        'b': "Hyper Text Markup Language",
        'c': "Hyperlinks and Text Markup Language",
        'd': "Hyperlink Markup Language",
        'ans': "b"
    },
    {
        'q': "Year was JavaScript launched?",
        'a': "1994",
        'b': "1995",
        'c': "1996",
        'd': "1997",
        'ans': "b"
    },
    {
        'q': "What is the capital of Canada?",
        'a': "Toronto",
        'b': "Ottawa",
        'c': "Montreal",
        'd': "Vancouver",
        'ans': "b"
    },
    {
        'q': "Who is known as the father of computer science?",
        'a': "Alan Turing",
        'b': "Bill Gates",
        'c': "Steve Jobs",
        'd': "Mark Zuckerberg",
        'ans': "a"
    },
    {
        'q': "What is the largest planet in our solar system?",
        'a': "Earth",
        'b': "Jupiter",
        'c': "Mars",
        'd': "Saturn",
        'ans': "b"
    },
    {
        'q': "Which programming language is often used for data science?",
        'a': "Java",
        'b': "Python",
        'c': "C++",
        'd': "Ruby",
        'ans': "b"
    },
    {
        'q': "What is the capital of Japan?",
        'a': "Seoul",
        'b': "Beijing",
        'c': "Tokyo",
        'd': "Bangkok",
        'ans': "c"
    },
    {
        'q': "Who wrote 'Romeo and Juliet'?",
        'a': "Charles Dickens",
        'b': "Jane Austen",
        'c': "William Shakespeare",
        'd': "Homer",
        'ans': "c"
    },
    {
        'q': "What is the square root of 144?",
        'a': "10",
        'b': "12",
        'c': "14",
        'd': "16",
        'ans': "b"
    },
    {
        'q': "Which continent is known as the 'Land of Kangaroos'?",
        'a': "Europe",
        'b': "South America",
        'c': "Australia",
        'd': "Africa",
        'ans': "c"
    },
    {
        'q': "In which year did World War I begin?",
        'a': "1910",
        'b': "1914",
        'c': "1918",
        'd': "1922",
        'ans': "b"
    },
    {
        'q': "What is the chemical symbol for gold?",
        'a': "Au",
        'b': "Ag",
        'c': "Cu",
        'd': "Fe",
        'ans': "a"
    },
    {
        'q': "Which country is known as the 'Land of the Rising Sun'?",
        'a': "China",
        'b': "Japan",
        'c': "South Korea",
        'd': "Vietnam",
        'ans': "b"
    },
    {
        'q': "Who developed the theory of relativity?",
        'a': "Isaac Newton",
        'b': "Albert Einstein",
        'c': "Galileo Galilei",
        'd': "Nikola Tesla",
        'ans': "b"
    },
    {
        'q': "Which planet is known as the 'Red Planet'?",
        'a': "Mars",
        'b': "Venus",
        'c': "Jupiter",
        'd': "Mercury",
        'ans': "a"
    },
    {
        'q': "What is the largest mammal on Earth?",
        'a': "Elephant",
        'b': "Blue Whale",
        'c': "Giraffe",
        'd': "Hippopotamus",
        'ans': "b"
    },
    {
        'q': "In which year did the Titanic sink?",
        'a': "1912",
        'b': "1920",
        'c': "1931",
        'd': "1945",
        'ans': "a"
    },
    {
        'q': "What is the capital of China?",
        'a': "Beijing",
        'b': "Shanghai",
        'c': "Hong Kong",
        'd': "Tokyo",
        'ans': "a"
    },
    {
        'q': "Who painted the Mona Lisa?",
        'a': "Vincent van Gogh",
        'b': "Leonardo da Vinci",
        'c': "Pablo Picasso",
        'd': "Claude Monet",
        'ans': "b"
    },
    {
        'q': "What is the main ingredient in guacamole?",
        'a': "Tomato",
        'b': "Avocado",
        'c': "Onion",
        'd': "Lemon",
        'ans': "b"
    },
    {
        'q': "Which country is known as the 'Land of the Midnight Sun'?",
        'a': "Norway",
        'b': "Canada",
        'c': "Russia",
        'd': "Sweden",
        'ans': "a"
    },
    {
        'q': "Who wrote 'To Kill a Mockingbird'?",
        'a': "J.K. Rowling",
        'b': "Harper Lee",
        'c': "George Orwell",
        'd': "Mark Twain",
        'ans': "b"
    },
    {
        'q': "What is the smallest prime number?",
        'a': "1",
        'b': "2",
        'c': "3",
        'd': "5",
        'ans': "c"
    },
    {
        'q': "Which planet is known as the 'Blue Planet'?",
        'a': "Earth",
        'b': "Neptune",
        'c': "Uranus",
        'd': "Saturn",
        'ans': "a"
    },
    {
        'q': "What is the capital of Australia?",
        'a': "Sydney",
        'b': "Melbourne",
        'c': "Canberra",
        'd': "Perth",
        'ans': "c"
    },
    {
        'q': "Who is the author of '1984'?",
        'a': "George Orwell",
        'b': "Aldous Huxley",
        'c': "Ray Bradbury",
        'd': "J.K. Rowling",
        'ans': "a"
    },
    {
        'q': "What is the currency of Japan?",
        'a': "Yuan",
        'b': "Won",
        'c': "Yen",
        'd': "Ringgit",
        'ans': "c"
    },
    {
        'q': "Who discovered penicillin?",
        'a': "Alexander Fleming",
        'b': "Louis Pasteur",
        'c': "Marie Curie",
        'd': "Robert Koch",
        'ans': "a"
    },
    {
        'q': "What is the largest ocean on Earth?",
        'a': "Indian Ocean",
        'b': "Arctic Ocean",
        'c': "Pacific Ocean",
        'd': "Atlantic Ocean",
        'ans': "c"
    },
    {
        'q': "Which element has the chemical symbol 'O'?",
        'a': "Oxygen",
        'b': "Osmium",
        'c': "Oganesson",
        'd': "Oberon",
        'ans': "a"
    },
    {
        'q': "What is the speed of light?",
        'a': "300,000 km/s",
        'b': "150,000 km/s",
        'c': "600,000 km/s",
        'd': "900,000 km/s",
        'ans': "a"
    },
    {
        'q': "Who is the 'Queen of Pop'?",
        'a': "Madonna",
        'b': "Beyoncé",
        'c': "Lady Gaga",
        'd': "Taylor Swift",
        'ans': "a"
    },
    {
        'q': "What is the capital of South Africa?",
        'a': "Cape Town",
        'b': "Pretoria",
        'c': "Johannesburg",
        'd': "Durban",
        'ans': "b"
    },
    {
        'q': "Who painted 'Starry Night'?",
        'a': "Pablo Picasso",
        'b': "Vincent van Gogh",
        'c': "Claude Monet",
        'd': "Leonardo da Vinci",
        'ans': "b"
    },
    {
        'q': "What is the largest bird in the world?",
        'a': "Eagle",
        'b': "Albatross",
        'c': "Ostrich",
        'd': "Penguin",
        'ans': "c"
    },
    {
        'q': "Which gas is most abundant in Earth's atmosphere?",
        'a': "Oxygen",
        'b': "Nitrogen",
        'c': "Carbon Dioxide",
        'd': "Argon",
        'ans': "b"
    },
    {
        'q': "Who wrote 'The Great Gatsby'?",
        'a': "F. Scott Fitzgerald",
        'b': "Ernest Hemingway",
        'c': "Jane Austen",
        'd': "Charles Dickens",
        'ans': "a"
    },
    {
        'q': "What is the capital of Argentina?",
        'a': "Buenos Aires",
        'b': "Rio de Janeiro",
        'c': "Lima",
        'd': "Santiago",
        'ans': "a"
    },
    {
        'q': "What is the powerhouse of the cell?",
        'a': "Nucleus",
        'b': "Mitochondria",
        'c': "Endoplasmic Reticulum",
        'd': "Golgi Apparatus",
        'ans': "b"
    }
];

let index = 0; 
let point = 0;
const node = document.getElementById("qun");  
const pp = document.querySelectorAll(".ss")
const score = document.getElementById("score");
 
// let aa = document.getElementsByClassName("ss");

const qunload=()=> {
    let data=quns[index];
    // console.log(data.q);
    node.innerHTML =`${index+1}) ${data.q}`;
    pp[0].nextElementSibling.innerText = data.a;
    pp[1].nextElementSibling.innerText = data.b;
    pp[2].nextElementSibling.innerText = data.c;
    pp[3].nextElementSibling.innerText = data.d;
};
qunload();

const anscheck = () => {
    let data = quns[index];
   
    pp.forEach((input) => {
        if (input.checked) {
              if (input.value === data.ans) {
                // console.log(input.value);
                updateScore();
            }
        }
    })

    index = index + 1;
    // if (index == 40) {
     
    // }
    qunload();
    deselectRadioButton();
}

document.getElementById("submit").addEventListener("click", anscheck);

const updateScore = () => {
    // console.log("dpoll");
    point++;
    score.innerText =`${'Score: '}`+point;
}

function deselectRadioButton() {
    // Set the 'checked' attribute to false for all radio buttons with the specified name
    let radioButtons = document.getElementsByName("options");
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}