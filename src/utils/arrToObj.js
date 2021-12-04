export const arrToObj = (arr) => {
  let outer = [];

  for (let i = 0; i < 5; i++) {
    let inner = [];
    for (let j = 0; j < 5; j++) {
      inner.push({
        occupied: arr[Math.floor(i / 5)]?.[0],
        slotId: arr[Math.floor(i / 5)]?.[1],
        health: arr[Math.floor(i / 5)]?.[2],
        cardId: arr[Math.floor(i / 5)]?.[3],
        address: arr[Math.floor(i / 5)]?.[4]
      });
    }
    outer.push(inner);
  }

  return outer;
};
