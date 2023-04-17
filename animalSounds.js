const lion = document.querySelector('#lionEvent');
const lionConstellation= document.querySelector("#lionConstellation")
const aries = document.querySelector('#ramEvent');
const ariesConstellation= document.querySelector("#ariesConstellation")
const taurus = document.querySelector('#taurusEvent');
const taurusConstellation= document.querySelector("#taurusConstellation")
const cancer = document.querySelector('#cancerEvent');
const cancerConstellation= document.querySelector("#cancerConstellation")
const scorpius = document.querySelector('#scorpiusEvent');
const scorpiusConstellation= document.querySelector("#scorpiusConstellation")
// let eventFusion

view_constellation(lion, lionConstellation, 5000);
view_constellation(aries, ariesConstellation, 2500);
view_constellation(taurus, taurusConstellation, 4000);
view_constellation(cancer, cancerConstellation, 7000);
view_constellation(scorpius, scorpiusConstellation, 2500);



// Function for transforming constellations in an animal
function view_constellation (animal, constellation, time) {
  constellation.addEventListener('fusing', (event) => { // Starts Event when looking at the constellation
    console.log(event);
    // eventFusion= setTimeout(() => {
      constellation.setAttribute('visible', false) // Hides constellation
      animal.setAttribute('visible', true) // Animal Appears
      animal.components.sound.playSound(); // Plays sound
      setTimeout(() => {
        animal.setAttribute('visible', false) // Hides animal
        constellation.setAttribute('visible', true) // Constellation Appears
      },time); // Wait a certain amount of time until executing the function
    // }, 3000)
  });
};