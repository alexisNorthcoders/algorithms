export function dirReduc(arr: string[]) {
  const directions = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  arr.forEach((cardinal) => {
    switch (cardinal) {
      case "NORTH":
        directions.n++;
        break;
      case "SOUTH":
        directions.s++;
        break;
      case "EAST":
        directions.e++;
        break;
      case "WEST":
        directions.w++;
        break;
    }
  });

  let vertical = directions.n - directions.s; // go NORTH if positive
  let horizontal = directions.w - directions.e; // go WEST if positive
  const finalDirections = [];
  if (vertical > 0) {
    while (vertical > 0) {
      vertical--;
      finalDirections.push("NORTH");
    }
  } else if (vertical < 0) {
    while (vertical < 0) {
      vertical++;
      finalDirections.push("SOUTH");
    }
  }
  if (horizontal > 0) {
    while (horizontal > 0) {
      horizontal--;
      finalDirections.push("WEST");
    }
  } else if (horizontal < 0) {
    while (horizontal < 0) {
      horizontal++;
      finalDirections.push("EAST");
    }
  }
  return finalDirections;
}
