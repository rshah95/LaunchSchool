function lightsOn(switches) {
  //initialize object with lights data
  let lights = {};
  for (let x = 1; x <= switches; x++) {
    lights[x] = 0;
  }

  // perform count passes
  for (let pass = 1; pass <= switches; pass++) {
    for (let y = 1; y <= switches; y++) {
      if (y % pass === 0) lights[y] === 0 ? lights[y] += 1 : lights[y] -= 1;
    }
  }

  // return switchs that are on
  let onSwitches = [];
  for (let light in lights) {
    if (lights[light] === 1) onSwitches.push(light);
  }

  return onSwitches;

}


console.log(lightsOn(100));