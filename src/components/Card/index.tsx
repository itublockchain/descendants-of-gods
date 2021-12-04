import { LAYOUT } from "common/constants/layout";
import { RootState } from "store";
import { clsnm } from "utils/clsnm";
import styles from "./Card.module.scss";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

type CardProps = {
  className?: string;
  hoverable?: boolean;
  rotate?: boolean;
  draggable?: boolean;
};

const Card = ({ className, hoverable, rotate, draggable }: CardProps) => {
  const { layout } = useSelector((state: RootState) => state.game);

  const [{ isDragging, isDraggable }, drag] = useDrag({
    type: "1",
    item: { type: "asfafs" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      isDraggable: hoverable
    })
  });

  return (
    <div
      ref={isDraggable ? drag : null}
      className={clsnm(
        styles.card,
        layout === LAYOUT.collapsed && styles.collapsed,
        hoverable && !isDragging && styles.hoverable,
        rotate && styles.rotate,
        className
      )}
    ></div>
  );
};

export default Card;
