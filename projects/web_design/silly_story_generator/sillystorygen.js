const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const names  = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

const places = ['the soup kitchen', 'Disneyland', 'the White House'];

const actions = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
	let weight = 1;
	let temperature = 1;
	let unitW = '';
	let unitT = '';
	let name = '';
	
  if(customName.value !== '') {
    name = customName.value;
  } else {
	name = randomValueFromArray(names);
  }

  if(document.getElementById("uk").checked) {
    weight = Math.round(300*453.592);
    temperature =  Math.round((94-32)*5/9);
	unitW = 'grams';
	unitT = 'celcius';
  } else {
	weight = 300;
	temperature = 94;
	unitW = 'pounds';
	unitT = 'fahrenheit';
  }

  story.textContent = `It was ${temperature} ${unitT} outside, so ${name} went for a walk. When they got to ${randomValueFromArray(places)}, they stared in horror for a few moments, then ${randomValueFromArray(actions)}. Bob saw the whole thing, but was not surprised — ${name} weighs ${weight} ${unitW}, and it was a hot day.`;
  story.style.visibility = 'visible';
}
