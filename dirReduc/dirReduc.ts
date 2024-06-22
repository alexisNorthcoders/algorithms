export default function dirReduc(arr:string[]) {
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

  const vertical = directions.n - directions.s; // go NORTH if positive
  const horizontal = directions.w - directions.e; // go WEST if positive
  const finalDirections = [];
  if (vertical > 0) {
    finalDirections.push("NORTH");
  } else if (vertical < 0) {
    finalDirections.push("SOUTH");
  }
  if (horizontal > 0) {
    finalDirections.push("WEST");
  } else if (horizontal < 0) {
    finalDirections.push("EAST");
  }
  return finalDirections;
}
