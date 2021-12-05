import { CARD } from "store/reducers/cards";

export const updatedCell = (cellInfo, stack) => {
  for (let i = 0; i < stack.length; i++) {
    let edited = cellInfo[target[0]][target[1]];

    edited = {
      occupied: true,
      slotId: null,
      health: CARD[stack[i].cardId].health,
      cardId: stack[i].cardId,
      address: 1
    };
  }

  return cellInfo;
};
