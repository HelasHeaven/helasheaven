function playAudio(url) {
  new Audio(url).play();
}

let counter = 0;
const messages = [
  "Salut Sogand !",
  "J'espère que tu vas bien !",
  "Moi non...",
  "Mais je ne suis qu'une vulgaire image animée.",
  "Je ne suis même pas réel !",
  "Parfois j'aimerais avoir des émotions...",
  "Quelle chance tu as d'être dotée d'émotions...",
  "Profites de cette chance...",
  "N'hésite jamais à la montrer !",
  "Au fait, Hélas a laissé un message pour toi.",
  "Je l'ai mis dans la boîte à gauche de la page !",
  "..."
];

document.getElementById('dracunyan-1').addEventListener('click', function () {
  document.getElementById('dracunyan-chat').textContent = messages[counter % messages.length];
  counter++;
});