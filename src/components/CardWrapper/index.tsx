import styles from "./CardWrapper.module.scss";
import { ReactNode } from "react";
import { clsnm } from "utils/clsnm";
import { useDrag } from "react-dnd";
import { CARD, CARDTYPES } from "store/reducers/cards";

type CardWrapperProps = {
  card?: any;
  children?: ReactNode;
  className?: string;
  draggable?: boolean;
  index?: any;
};

const CardWrapper = ({
  draggable,
  index,
  card,
  children,
  className
}: CardWrapperProps) => {
  const [{ isDragging, isDraggable }, drag] = useDrag({
    type: "any",
    item: { type: "any", index: index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      isDraggable: draggable
    })
  });

  return (
    <div ref={drag} className={clsnm(styles.wrapper, className)}>
      <div
        style={{
          backgroundImage: `url(${
            index !== -1 ? CARD[index as "0" | "1" | "2" | "3" | "4"]?.img : ""
          }`
        }}
        className={clsnm(
          styles.image,
          draggable && styles.draggable,
          index == -1 && styles.invisible
        )}
      ></div>
      {children && <div className={styles.meta}>{children}</div>}
    </div>
  );
};

export default CardWrapper;
