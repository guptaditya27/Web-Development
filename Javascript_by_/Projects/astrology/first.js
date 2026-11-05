const zodiac = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const compliments = [
  "You have a great sense of humor.",
  "You are a wonderful listener.",
  "You make people feel welcome.",
  "You have a really positive attitude.",
  "You are thoughtful and considerate.",
  "You bring out the best in others.",
  "You are easy to talk to.",
  "You have a great perspective on things.",
  "You are genuinely kind.",
  "You make challenging things seem manageable.",
  "You are full of interesting ideas.",
  "You have a calming presence.",
  "You are incredibly dependable.",
  "You are a joy to be around.",
  "You are great at making people smile.",
  "You have a lot of patience.",
  "You are open-minded and understanding.",
  "You have a talent for solving problems.",
  "You are an inspiring person.",
  "You make others feel appreciated.",
  "You are brave about trying new things.",
  "You have a lovely way of expressing yourself.",
  "You are generous with your time.",
  "You are wonderfully authentic.",
  "You handle change with grace.",
  "You notice the little things that matter.",
  "You are a great team player.",
  "You have a strong sense of purpose.",
  "You are more capable than you realize.",
  "You make ordinary moments memorable.",
  "The world is better with you in it.",
];

const victimCardCompliments = [
  "You deserve to be treated with kindness and respect.",
  "Your feelings are valid, and you deserve to be heard.",
  "You are not alone, even when things feel difficult.",
  "What happened does not define your worth.",
  "You deserve support at your own pace.",
  "It takes courage to get through a hard day.",
  "You have the right to set boundaries.",
  "You deserve to feel safe and supported.",
  "Asking for help is a strong and worthwhile step.",
  "You are allowed to take things one moment at a time.",
  "Your voice matters.",
  "You deserve patience and understanding.",
  "There is no single right way to heal.",
  "You are worthy of care, exactly as you are.",
  "You can choose who you trust with your story.",
  "You deserve to be believed and treated with compassion.",
  "Small steps forward still count.",
  "You are more than what you have been through.",
  "It is okay to rest when you need to.",
  "You deserve support without judgment.",
  "Your boundaries matter.",
  "You do not have to face everything all at once.",
  "You are allowed to ask someone you trust to stay by your side.",
  "Your experiences and needs deserve to be taken seriously.",
  "You can take the time you need.",
  "You deserve moments of peace and comfort.",
  "Getting support is a sign of taking care of yourself.",
  "You have the right to make choices that feel safe for you.",
  "You deserve compassion, including from yourself.",
  "One difficult moment does not erase your strength.",
  "You matter, and support is available.",
];

const remedies = [
  "Begin the day with a few quiet breaths and a clear intention.",
  "Spend a few minutes outdoors and notice the natural surroundings.",
  "Keep your living space tidy to encourage a calmer routine.",
  "Write down one thing you are grateful for each day.",
  "Offer food or water to someone in need, if you are able.",
  "Light a candle safely as a symbol of hope and focus.",
  "Repeat a calming mantra or affirmation that feels meaningful to you.",
  "Make time for a kind conversation with someone you trust.",
  "Keep a regular sleep and wake schedule when possible.",
  "Take a short walk to refresh your mind and body.",
  "Set aside a few minutes for quiet reflection.",
  "Share a meal with family or friends when you can.",
  "Donate useful items to a local community organization.",
  "Care for a plant as a reminder to nurture steady growth.",
  "Listen to soothing music during a quiet moment.",
  "Organize one small area of your home or workspace.",
  "Practice a gentle stretch that feels comfortable for you.",
  "Spend time learning something that interests you.",
  "Reach out to a friend or relative you have not spoken with recently.",
  "Take a break from screens before bedtime.",
  "Do a small helpful act for someone without expecting anything in return.",
  "Keep a journal to reflect on your thoughts and goals.",
  "Create a simple routine that gives your day a steady rhythm.",
  "Watch the sunrise or sunset and take a moment to reflect.",
  "Use a few minutes of meditation or prayer if it suits your beliefs.",
  "Make a realistic plan for one task you have been putting off.",
  "Spend time in a place that helps you feel peaceful.",
  "Celebrate a small accomplishment at the end of the day.",
  "Choose a meaningful color or symbol as a personal reminder of your intention.",
  "Practice speaking to yourself with patience and kindness.",
  "Choose one small, realistic goal and take a first step toward it.",
];

const futurePredictions = [
  "A new opportunity may encourage you to explore an interest you have been putting aside.",
  "A thoughtful conversation could help strengthen an important relationship.",
  "A small decision may set you on a path toward a goal that matters to you.",
  "You may discover a useful skill through a challenge you choose to take on.",
  "A change in your routine could make room for more balance and energy.",
  "Someone's advice may offer a fresh perspective, while the final choice remains yours.",
  "Consistent effort may bring progress toward a personal or professional goal.",
  "An unexpected invitation could lead to an enjoyable new experience.",
  "You may find renewed motivation by revisiting something you care about.",
  "A patient approach could help you work through a complicated situation.",
  "Making time for rest may help you feel more focused on your priorities.",
  "A new connection could introduce you to an idea or activity you enjoy.",
  "You may feel ready to let go of a habit that no longer serves your goals.",
  "A practical plan could make a long-term ambition feel more achievable.",
  "Your curiosity may lead you to a rewarding learning experience.",
  "An act of kindness could deepen a connection with someone around you.",
  "You may notice progress in an area where you have been steadily persistent.",
  "A flexible mindset could help you make the most of a change in plans.",
  "Taking time to reflect may clarify what you want to focus on next.",
  "Your future will be shaped by many choices, and you can take it one step at a time.",
];

const form = document.getElementById("astroForm");
const result = document.getElementById("result");
const yearInput = document.getElementById("year");

yearInput.max = new Date().getFullYear();
yearInput.min = "1900";

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getZodiacSign(day, month) {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiac[0];
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiac[1];
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiac[2];
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiac[3];
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiac[4];
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiac[5];
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiac[6];
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiac[7];
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiac[8];
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiac[9];
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiac[10];
  return zodiac[11];
}

function addResultLine(label, value) {
  const paragraph = document.createElement("p");
  const heading = document.createElement("strong");
  heading.textContent = `${label}: `;
  paragraph.append(heading, document.createTextNode(value));
  result.append(paragraph);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const birthplace = document.getElementById("birthPlace").value.trim();
  const day = Number(document.getElementById("day").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(yearInput.value);
  const birthDate = new Date(year, month - 1, day);

  result.replaceChildren();

  if (
    !name ||
    !surname ||
    !birthplace ||
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    result.textContent = "Please enter your name, birthplace, and a valid date of birth.";
    return;
  }

  const greeting = document.createElement("h2");
  greeting.textContent = `Hello, ${name} ${surname}!`;
  result.append(greeting);
  addResultLine("Birthplace", birthplace);
  addResultLine("Zodiac sign", getZodiacSign(day, month));
  addResultLine("Compliment", getRandomItem(compliments));
  addResultLine("A supportive message", getRandomItem(victimCardCompliments));
  addResultLine("A gentle suggestion", getRandomItem(remedies));
  addResultLine("For reflection", getRandomItem(futurePredictions));
});