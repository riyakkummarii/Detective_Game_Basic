// ------------------- 10 Cases -------------------
const cases = [
  {
    title: "The Broken Vase",
    difficulty: "Easy",
    description: "At the Sharma household, a priceless antique vase lies shattered during dinner. Neighbors recall seeing Arjun playing cricket indoors.",
    suspects: ["Arjun (teenage son)", "Mrs. Sharma (mother)", "Kiran (housemaid)"],
    clues: [
      { name: "Floor", detail: "Shards near Arjun’s cricket bat." },
      { name: "Bat", detail: "Porcelain dust on the bat." },
      { name: "Maid’s Room", detail: "Everything tidy." }
    ],
    culprit: "Arjun (teenage son)",
    reason: "Arjun played cricket indoors and accidentally broke the vase."
  },
  {
    title: "The Missing Lunchbox",
    difficulty: "Easy",
    description: "Rhea’s lunchbox disappears from the office pantry. Colleagues are suspicious, and CCTV is reviewed.",
    suspects: ["Rahul (colleague)", "Sneha (HR)", "Watchman Patel"],
    clues: [
      { name: "Drawer", detail: "Empty food wrapper in Rahul’s desk." },
      { name: "Pantry", detail: "Sneha’s lunch untouched." },
      { name: "Security Log", detail: "Patel on duty." }
    ],
    culprit: "Rahul (colleague)",
    reason: "Rahul took the lunchbox by mistake and hid it in his drawer."
  },
  {
    title: "The Vanished Necklace",
    difficulty: "Medium",
    description: "Mrs. Verma’s necklace disappears from a locked box. Footprints and scratches reveal the culprit.",
    suspects: ["Sunita (maid)", "Arun (neighbor)", "Riya (niece)"],
    clues: [
      { name: "Window", detail: "Muddy footprints outside." },
      { name: "Jewelry Box", detail: "Lock forcibly broken." },
      { name: "Niece’s Room", detail: "Riya studying; room fine." },
      { name: "Maid’s Bag", detail: "No valuables." }
    ],
    culprit: "Arun (neighbor)",
    reason: "Arun climbed through the window and stole the necklace."
  },
  {
    title: "The Cheating Exam",
    difficulty: "Medium",
    description: "Exam papers found in a locker. CCTV and duplicate keys help identify the culprit.",
    suspects: ["Karan (star student)", "Mr. Mehta (math teacher)", "Raghav (lab assistant)"],
    clues: [
      { name: "Locker", detail: "Exam papers found in Karan’s locker." },
      { name: "Teacher’s Desk", detail: "Untouched." },
      { name: "CCTV", detail: "Raghav near lockers at night." },
      { name: "Keys", detail: "Raghav has duplicate keys." }
    ],
    culprit: "Raghav (lab assistant)",
    reason: "Raghav planted papers in Karan’s locker using duplicate keys."
  },
  {
    title: "The Poisoned Tea",
    difficulty: "Hard",
    description: "At a family gathering, a guest collapses after tea. Investigation reveals tampering with the teapot.",
    suspects: ["Anjali (host)", "Vikram (cousin)", "Ramesh (family friend)"],
    clues: [
      { name: "Teapot", detail: "Traces of sleeping pills." },
      { name: "Kitchen", detail: "Medicine strip missing pills." },
      { name: "Serving", detail: "Vikram served the tea." },
      { name: "Ramesh’s Bag", detail: "Nothing suspicious." }
    ],
    culprit: "Vikram (cousin)",
    reason: "Vikram spiked tea to incapacitate guest and steal documents."
  },
  {
    title: "The Office Spy",
    difficulty: "Hard",
    description: "Company files leaked to competitor. USBs, CCTV, and logs provide clues.",
    suspects: ["Kavita (manager)", "Nikhil (intern)", "Dev (senior analyst)"],
    clues: [
      { name: "USB", detail: "Nikhil’s USB has files." },
      { name: "CCTV", detail: "Dev enters server room midnight." },
      { name: "Manager Laptop", detail: "No breach." },
      { name: "Server Logs", detail: "Files copied with Dev’s ID." }
    ],
    culprit: "Dev (senior analyst)",
    reason: "Dev leaked files and framed Nikhil."
  },
  {
    title: "The Locked Room Mystery",
    difficulty: "Hard",
    description: "Businessman found unconscious in locked room. Secret entry clues reveal the culprit.",
    suspects: ["Meera (wife)", "Sameer (brother-in-law)", "Dr. Khanna (family doctor)"],
    clues: [
      { name: "Window", detail: "Ceiling opening reachable via ladder." },
      { name: "Garden", detail: "Ladder with fresh mud." },
      { name: "Medical Kit", detail: "Contains sedatives." },
      { name: "Meera’s Phone", detail: "Normal calls." }
    ],
    culprit: "Dr. Khanna (family doctor)",
    reason: "Dr. Khanna administered sedatives and locked room via trick."
  },
  {
    title: "The Stolen Bicycle",
    difficulty: "Easy",
    description: "A child’s bicycle disappears from the apartment parking. CCTV and witnesses provide clues.",
    suspects: ["Nitin (neighbor’s kid)", "Suresh (watchman)", "Ravi (delivery boy)"],
    clues: [
      { name: "CCTV", detail: "Shows Ravi wheeling bicycle." },
      { name: "Playground", detail: "Nitin riding own bike." },
      { name: "Logbook", detail: "Suresh on duty." }
    ],
    culprit: "Ravi (delivery boy)",
    reason: "Ravi pretended to deliver parcel but stole bicycle."
  },
  {
    title: "The Fake Painting",
    difficulty: "Medium",
    description: "An art gallery discovers a fake painting. Security footage and records reveal the culprit.",
    suspects: ["Rina (artist)", "Mohan (curator)", "Sameer (guard)"],
    clues: [
      { name: "Paint Samples", detail: "Rina’s style doesn’t match fake painting." },
      { name: "Storage Room", detail: "Original missing." },
      { name: "Guard Log", detail: "Sameer left early." },
      { name: "Office Records", detail: "Mohan handled artwork transfers." }
    ],
    culprit: "Mohan (curator)",
    reason: "Mohan swapped the original painting with a fake to sell it secretly."
  },
  {
    title: "The Vanishing Manuscript",
    difficulty: "Hard",
    description: "Famous author’s unpublished manuscript disappears. Surveillance and staff interviews reveal the culprit.",
    suspects: ["Lalita (librarian)", "Rahul (assistant)", "Vinod (researcher)"],
    clues: [
      { name: "Safe", detail: "Lock picked." },
      { name: "Lalita’s Desk", detail: "Documents untouched." },
      { name: "Security Footage", detail: "Vinod near safe midnight." },
      { name: "Assistant Bag", detail: "Nothing unusual." }
    ],
    culprit: "Vinod (researcher)",
    reason: "Vinod stole the manuscript to publish secretly."
  }
];

// ------------------- Game State -------------------
let currentCaseIndex = 0;
let selectedCase = null;
let foundClues = {};
let totalScore = 0;
let casesSolved = 0;
let caseFinished = false; // new flag

// ------------------- Initialize -------------------
window.onload = initGame;

function initGame() {
  displayCaseSelector();
  updateScoreboard();
}

// ------------------- Display Case Selector -------------------
function displayCaseSelector() {
  const caseSelector = document.getElementById("caseSelector");
  caseSelector.innerHTML = "<h2>📂 Select a Case</h2>";
  cases.forEach((gameCase, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${gameCase.title} (${gameCase.difficulty})`;
    btn.onclick = () => startCase(index);
    caseSelector.appendChild(btn);
  });
}

// ------------------- Start Case -------------------
function startCase(index) {
  selectedCase = cases[index];
  currentCaseIndex = index;
  foundClues = {};
  caseFinished = false; // reset

  document.getElementById("storyText").textContent = selectedCase.description;

  const clueButtons = document.getElementById("clueButtons");
  clueButtons.innerHTML = "";
  selectedCase.clues.forEach(clue => {
    const btn = document.createElement("button");
    btn.textContent = clue.name;
    btn.onclick = () => revealClue(clue, btn);
    clueButtons.appendChild(btn);
  });

  const suspectButtons = document.getElementById("suspectButtons");
  suspectButtons.innerHTML = "";
  selectedCase.suspects.forEach(suspect => {
    const btn = document.createElement("button");
    btn.textContent = suspect;
    btn.onclick = () => accuseSuspect(suspect);
    suspectButtons.appendChild(btn);
  });

  document.getElementById("cluesSection").classList.remove("hidden");
  document.getElementById("suspectsSection").classList.remove("hidden");
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("foundClues").innerHTML = "";
  document.getElementById("nextCaseBtn").classList.add("hidden");
}

// ------------------- Reveal Clues -------------------
function revealClue(clue, btn) {
  if (caseFinished) return; // block after case solved
  if (foundClues[clue.name]) return;
  foundClues[clue.name] = clue.detail;
  const foundCluesDiv = document.getElementById("foundClues");
  const p = document.createElement("p");
  p.textContent = `🔍 ${clue.name}: ${clue.detail}`;
  foundCluesDiv.appendChild(p);
  btn.disabled = true;
}

// ------------------- Accuse Suspect -------------------
function accuseSuspect(suspect) {
  if (caseFinished) return; // prevent multiple accusations
  caseFinished = true;

  const resultDiv = document.getElementById("result");
  let points = 0;
  const difficultyPoints = { Easy: 10, Medium: 20, Hard: 30 };
  const wrongDeduction = 0;

  if (suspect === selectedCase.culprit) {
    points = difficultyPoints[selectedCase.difficulty];
    totalScore += points;
    casesSolved++;
    resultDiv.innerHTML = `
      ✅ Correct! ${suspect} is the culprit.<br>
      <strong>Reason:</strong> ${selectedCase.reason}<br>
      <strong>Points earned for this case:</strong> +${points}<br>
      <em>🕵️ You are a true detective! Excellent work.</em>`;
  } else {
    points = wrongDeduction;
    totalScore += points;
    casesSolved++;
    resultDiv.innerHTML = `
      ❌ Wrong! ${suspect} is innocent.<br>
      <strong>The real culprit:</strong> ${selectedCase.culprit}<br>
      <strong>Reason:</strong> ${selectedCase.reason}<br>
      <strong>Points earned:</strong> ${points}<br>
      <em>🕵️ Try harder next time, detective.</em>`;
  }

  document.getElementById("resultSection").classList.remove("hidden");
  document.getElementById("nextCaseBtn").classList.remove("hidden");

  // Disable all buttons after case is solved
  document.querySelectorAll("#clueButtons button, #suspectButtons button").forEach(btn => {
    btn.disabled = true;
  });

  // Update breakdown
  const scoreList = document.getElementById("scoreList");
  const li = document.createElement("li");
  li.textContent = `${selectedCase.title} (${selectedCase.difficulty}): ${points} points`;
  scoreList.appendChild(li);

  updateScoreboard();
}

// ------------------- Next Case -------------------
document.getElementById("nextCaseBtn").onclick = () => {
  if (currentCaseIndex + 1 < cases.length) {
    startCase(currentCaseIndex + 1);
  } else {
    document.getElementById("storyText").textContent = "🎉 You have solved all cases!";
    document.getElementById("cluesSection").classList.add("hidden");
    document.getElementById("suspectsSection").classList.add("hidden");
    document.getElementById("nextCaseBtn").classList.add("hidden");
  }
};

// ------------------- Update Scoreboard -------------------
function updateScoreboard() {
  document.getElementById("totalScore").textContent = `Total Score: ${totalScore}`;
  document.getElementById("casesSolved").textContent = `Cases Solved: ${casesSolved} / ${cases.length}`;
}
