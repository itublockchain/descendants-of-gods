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
  index?: number;
};

const Card = ({
  className,
  hoverable,
  rotate,
  draggable,
  index,
  ...rest
}: CardProps) => {
  const { layout } = useSelector((state: RootState) => state.game);

  const [{ isDragging, isDraggable }, drag] = useDrag({
    type: "1",
    item: { type: "asfafs" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      isDraggable: hoverable || draggable
    })
  });

  return (
    <div
      ref={isDraggable ? drag : null}
      className={clsnm(
        styles.card,
        layout === LAYOUT.collapsed && styles.collapsed,
        hoverable && !isDragging && styles.hoverable,
        draggable && styles.draggable,
        rotate && styles.rotate,
        className
      )}
      {...rest}
    ></div>
  );
};

export default Card;
