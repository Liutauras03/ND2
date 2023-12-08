var lightsOn = [false, false, false]; // pradžioje visiems kambariams šviesa yra išjungta

function toggleLight(roomIndex) {
  lightsOn[roomIndex - 1] = !lightsOn[roomIndex - 1];
  updateLightStatus(roomIndex);
}

function updateLightStatus(roomIndex) {
  var lightStatusElement = document.getElementById('lightStatus' + roomIndex);

  if (lightsOn[roomIndex - 1]) {
    lightStatusElement.textContent = 'Šviesa įjungta';
    lightStatusElement.style.color = 'green';
  } else {
    lightStatusElement.textContent = 'Šviesa išjungta';
    lightStatusElement.style.color = 'red';
  }
}
