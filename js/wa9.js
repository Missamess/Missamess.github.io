const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
 //let seems to be switchable with const so const is cooler
 let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
 insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
 insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
 insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== 'May') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.07)} stone`;
    const temperature = `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', tempreature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}




