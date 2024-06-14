const statement = document.getElementById("statement");
const optionButtons = document.querySelectorAll(".choice");
const explanation = document.getElementById("explanation");
const score = document.getElementById("score");
const nextqs = document.getElementsByClassName("nextqs")[0]; // Assuming there's only one next button

const facts = [
   {
      statement: "Is 1+1 == '2' same as 1+1 === '2'",
      option: "false",
      explanation:
         "'===' operator compares the type of data too whereas the '==' only compares the face value of the data",
   },
   {
      statement: "Are arrays objects",
      option: "true",
      explanation:
         "Arrays are a special type of objects. The typeof operator in JavaScript returns 'object' for arrays.",
   },
   {
      statement: "JAVAScript is unpredictable !",
      option: "true",
      explanation:
         "javScript was developed in a mere time of just 10 days initially",
   },
   {
      statement: "JAVAScript was developed in 1995",
      option: "true",
      explanation:
         "Brendan Eich, a programmer at Netscape Communications, developed JavaScript in 1995",
   },
];

const disable = (button) => {
   button.setAttribute("disabled", "");
};
const enable = (button) => {
   button.removeAttribute("disabled");
};

let sc = 0;
let i = 0;

statement.textContent = facts[i].statement;

for (let button of optionButtons) {
   button.addEventListener("click", () => {
      explanation.textContent = facts[i].explanation;
      for (let disabledButtons of optionButtons) {
         disable(disabledButtons);
      }
      if (button.value === facts[i].option) {
         button.classList.add("correct");
         sc++;
      } else {
         button.classList.add("incorrect");
      }
      score.textContent = "Score: " + sc + "/4";
   });
}

nextqs.addEventListener("click", () => {
   if (i < facts.length - 1) {
      i++;
      statement.textContent = facts[i].statement;
      explanation.textContent = "";
      for (let button of optionButtons) {
         enable(button);
         button.classList.remove("correct", "incorrect");
      }
   } else {
      alert("Quiz finished!");
   }
});