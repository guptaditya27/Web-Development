const quotes = [
  {
    quote: 'A small step taken today can make tomorrow feel possible.',
    author: 'Mira Sen',
  },
  { quote: 'Progress grows when you keep showing up.', author: 'Arjun Mehta' },
  {
    quote: 'Your next choice matters more than your last mistake.',
    author: 'Leena Kapoor',
  },
  {
    quote: 'Curiosity turns ordinary days into new beginnings.',
    author: 'Kabir Rao',
  },
  {
    quote: 'Patience is the quiet work behind lasting change.',
    author: 'Nisha Verma',
  },
  {
    quote: 'A clear purpose can guide you through an unclear day.',
    author: 'Dev Malhotra',
  },
  { quote: 'Begin with what you have; learn as you go.', author: 'Tara Iyer' },
  {
    quote: 'Confidence is built by keeping promises to yourself.',
    author: 'Rohan Das',
  },
  {
    quote: 'Rest is part of the journey, not a detour from it.',
    author: 'Anika Bose',
  },
  {
    quote: 'Every skill starts as something you do not yet know.',
    author: 'Ishaan Roy',
  },
  {
    quote: 'Let your effort be louder than your doubts.',
    author: 'Meera Nair',
  },
  {
    quote: "A kind word can change the shape of someone's day.",
    author: 'Samar Khanna',
  },
  {
    quote: 'You do not need a perfect plan to take a useful step.',
    author: 'Diya Shah',
  },
  { quote: 'Make room for ideas that surprise you.', author: 'Neel Joshi' },
  { quote: 'The view changes when you keep climbing.', author: 'Kavya Menon' },
  {
    quote: 'Mistakes are information; use what they teach you.',
    author: 'Ayaan Gill',
  },
  {
    quote: 'Focus on the work in front of you, then begin again.',
    author: 'Rhea Sood',
  },
  {
    quote: 'A slower pace can still carry you forward.',
    author: 'Vivaan Bhat',
  },
  {
    quote: 'Choose the courage to try over the comfort of wondering.',
    author: 'Sana Qureshi',
  },
  {
    quote: 'Good habits make room for the life you want.',
    author: 'Kunal Arora',
  },
  {
    quote: 'Your perspective is a tool; turn it toward possibility.',
    author: 'Ira Chawla',
  },
  {
    quote: 'Listen closely; good answers often begin with attention.',
    author: 'Advik Sinha',
  },
  {
    quote: 'Do the simple things with care, and they become meaningful.',
    author: 'Pooja Kulkarni',
  },
  {
    quote: 'A setback can redirect you without defining you.',
    author: 'Nakul Jain',
  },
  {
    quote: 'Keep learning, and let your plans grow with you.',
    author: 'Zoya Mirza',
  },
  {
    quote: 'The first draft only needs to exist; it can improve later.',
    author: 'Rehan Ali',
  },
  {
    quote: 'A little consistency can outlast a burst of inspiration.',
    author: 'Aditi Prasad',
  },
  {
    quote: 'Give your attention to what helps you grow.',
    author: 'Manav Patel',
  },
  { quote: 'Hope is a reason to take one more step.', author: 'Simran Kaur' },
  {
    quote: 'Make your values visible in the choices you make.',
    author: 'Yash Thakur',
  },
  {
    quote: 'You can change direction without losing your progress.',
    author: 'Farah Khan',
  },
  {
    quote: 'Every day offers a chance to practice being patient.',
    author: 'Omkar Desai',
  },
  {
    quote: 'A thoughtful question can open a door effort cannot.',
    author: 'Ritika Sen',
  },
  { quote: 'Be proud of the work no one else sees.', author: 'Harsh Vora' },
  {
    quote: 'Your pace is yours; keep moving with intention.',
    author: 'Alia Fernandes',
  },
  {
    quote: 'Small acts of care make strong communities.',
    author: 'Pranav Kulkarni',
  },
  {
    quote: 'Let experience make you wiser, not smaller.',
    author: 'Nandini Rao',
  },
  {
    quote: 'A fresh start can begin in the middle of an ordinary day.',
    author: 'Eshan Kapoor',
  },
  { quote: 'Spend your energy on what you can shape.', author: 'Mahi Bansal' },
  {
    quote: 'The work gets lighter when you remember why it matters.',
    author: 'Rudra Sen',
  },
  {
    quote: 'Keep your standards high and your self-talk kind.',
    author: 'Ishita Dutta',
  },
  {
    quote: 'One honest attempt is better than endless hesitation.',
    author: 'Parth Shah',
  },
  { quote: 'Growth often sounds like asking for help.', author: 'Saira Malik' },
  {
    quote: 'Notice how far you have come before planning the next mile.',
    author: 'Dhruv Anand',
  },
  {
    quote: 'A calm mind can find options that hurry misses.',
    author: 'Tanvi Ghosh',
  },
  {
    quote: 'Make something useful, then make it better.',
    author: 'Aarav Khanna',
  },
  {
    quote: 'The future is shaped by the choices you repeat.',
    author: 'Myra Joshi',
  },
  {
    quote: 'Stay open to learning from unexpected places.',
    author: 'Neil Fernandes',
  },
  {
    quote: 'Bravery can be quiet: sometimes it is simply beginning.',
    author: 'Saanvi Rao',
  },
  {
    quote: 'Leave a little more kindness in the places you pass through.',
    author: 'Reyansh Mehta',
  },
];

const btn = document.querySelector('button');
const currQuote = document.querySelector('h1');
const currAuthor = document.querySelector('#author');

btn.addEventListener('click', () => {
  const index = Math.floor(Math.random() * quotes.length);
  currQuote.textContent = quotes[index].quote;
  currAuthor.textContent = `— ${quotes[index].author}`;
});