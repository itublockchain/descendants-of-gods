import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { useDrop } from "react-dnd";
import { clsnm } from "utils/clsnm";
import styles from "./CardSelector.module.scss";
import { CARD, CARDTYPES } from "store/reducers/cards";
import Card from "components/Card";
import CardWrapper from "components/CardWrapper";

type SlotProps = {
  index: CARDTYPES | any;
  setSelectedDeck?: Dispatch<SetStateAction<number[]>>;
  selectedDeck?: number[];
  cards?: any;
  setCards?: any;
  old?: any;
};
const Slot = ({
  index,
  selectedDeck,
  setSelectedDeck,
  cards,
  setCards,
  old
}: SlotProps) => {
  const calculateCardCounts = (oldCards: any) => {
    const newCards = [...old];

    oldCards?.forEach((item: any, oldIndex: any) => {
      if (item !== -1) {
        newCards[item]--;
      }
    });

    return newCards;
  };

  const [{ isOver, dropabble }, drop] = useDrop({
    //@ts-ignore
    accept: "any",
    drop: (item: any, monitor) => {
      const oldCards = [...(selectedDeck || [])];
      oldCards[index] = item.index;
      //@ts-ignore
      setSelectedDeck(oldCards);

      setCards(calculateCardCounts(oldCards));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      dropabble: !!monitor.canDrop()
    })
  });

  return (
    <div ref={drop} className={clsnm(styles.slot, isOver && styles.isOver)}>
      <CardWrapper
        className={styles.cardWrapperInSlot}
        index={selectedDeck?.[index]}
      />
    </div>
  );
};

export { Slot };
