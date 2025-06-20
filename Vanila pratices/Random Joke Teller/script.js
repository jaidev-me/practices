const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything.",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "What do you call a fake noodle? An impasta.",
  "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
  "Did you hear about the claustrophobic astronaut? He just needed a little space.",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "Why don't oysters donate to charity? Because they're shellfish.",
  "What do you call a pile of cats? A meowtain.",
  "How do you organize a space party? You 'planet'!",
  "Why did the math book look sad? Because it had too many problems.",
  "Parallel lines have it so easy. They're never gonna meet, but they don't even care.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
  "I'm on a seafood diet. I see food and I eat it.",
  "How does a penguin build its house? Igloos it together!",
  "What do you call a fish wearing a crown? King fish.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "How does a snowman get around? By riding an 'icicle'!",
  "Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
  "What's orange and sounds like a parrot? A carrot!",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why don't eggs tell jokes? Because they might crack up.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why don't some fish play piano? You can't tuna fish.",
  "What do you call a group of musical whales? An orca-stra.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a factory that makes okay products? A satisfactory.",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "How do you organize a space party? You 'planet'!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I'm friends with all electricians. We have great current connections.",
  "Why don't scientists trust stairs? Because they're always up to something.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
  "I'm on a seafood diet. I see food and I eat it.",
  "How does a penguin build its house? Igloos it together!",
  "What do you call a fish wearing a crown? King fish.",
  "What's orange and sounds like a parrot? A carrot!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "How does a snowman get around? By riding an 'icicle'!",
  "Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why don't some fish play piano? You can't tuna fish.",
  "What do you call a group of musical whales? An orca-stra.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a factory that makes okay products? A satisfactory.",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "How do you organize a space party? You 'planet'!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I'm friends with all electricians. We have great current connections.",
  "Why don't scientists trust stairs? Because they're always up to something.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
  "I'm on a seafood diet. I see food and I eat it.",
  "How does a penguin build its house? Igloos it together!",
  "What do you call a fish wearing a crown? King fish.",
  "What's orange and sounds like a parrot? A carrot!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "How does a snowman get around? By riding an 'icicle'!",
  "Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why don't some fish play piano? You can't tuna fish.",
  "What do you call a group of musical whales? An orca-stra."
  // ... Add more jokes here
];


const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert(jokes[Math.floor(Math.random() * jokes.length)], 'success')
  })
}