const codeForm = document.getElementById("codeForm");
const clue1 = String.fromCharCode(72, 79, 76, 73, 68, 65, 89);
const clue2 = String.fromCharCode(76, 69, 65, 86, 69, 83);
const clue3 = String.fromCharCode(78, 69, 85, 82, 79, 71, 82, 73, 68);

const a3 = String.fromCharCode(
  70,
  105,
  110,
  97,
  108,
  108,
  121,
  44,
  32,
  121,
  111,
  117,
  114,
  32,
  103,
  105,
  102,
  116,
  32,
  104,
  105,
  100,
  101,
  115,
  32,
  105,
  110,
  32,
  97,
  32,
  98,
  101,
  100,
  114,
  111,
  111,
  109,
  32,
  119,
  101,
  114,
  101,
  32,
  110,
  111,
  32,
  111,
  110,
  101,
  32,
  116,
  104,
  101,
  114,
  101,
  33
);

function showCodeForm() {
  const clueContainer = document.getElementById("clueContainer");

  clueContainer.style.opacity = "0";
  setTimeout(() => {
    clueContainer.style.display = "none";
    codeForm.classList.add("active");
  }, 500);
}

function checkCode() {
  const codeWord = document.getElementById("codeWord").value.toUpperCase();
  const clues = ["clue1", "clue2", "clue3"];

  clues.forEach(clueId => {
    const clue = document.getElementById(clueId);
    if (clue) {
      clue.classList.remove("active");
    }
  });

  const index =
    codeWord === clue1
      ? 0
      : codeWord === clue2
      ? 1
      : codeWord === clue3
      ? 2
      : -1;

  if (index !== -1) {
    const currentClue = document.getElementById(clues[index]);
    currentClue.classList.add("active");
    document.getElementById("final").value = a3;
    document.getElementById("codeWord").value = "";
    document.getElementById("error").textContent = "";
  } else {
    document.getElementById("error").textContent =
      "Incorrect code. Keep trying!";
  }
}
