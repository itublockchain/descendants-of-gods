import { RootState } from "store";
import { clsnm } from "utils/clsnm";
import { cornerClassGenerator } from "utils/cornerClassGenerator";
import styles from "./Cell.module.scss";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";

type CellProps = {
  row: number;
  column: number;
  item?: any;
};

const Cell = ({ row, column, item }: CellProps) => {
  const { table, playedCards, moveStack, cellInfo, energy } = useSelector(
    (state: RootState) => state.game
  );
  const borderClass =
    cornerClassGenerator({
      row,
      column,
      rows: table.rows,
      columns: table.columns
    }) || "";

  const [{ isOver, droppable }, drop]: any = useDrop({
    accept: "1",
    drop: (item: any, monitor: any) => {
      //function
      if (item?.type === "bottom") {
        if (!playedCards.includes(item.index) && 4 - row !== 0) {
          alert("Play to first row!");
        } else {
        }
      }
    },
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver(),
      dropabble: !!monitor.canDrop()
    })
  });

  return (
    <div
      ref={drop}
      className={clsnm(
        styles.cell,
        table?.rows - 1 === row && styles.lastRow,
        table?.columns - 1 === column && styles.lastCol,
        isOver && styles.over,
        droppable && styles.dropabble,
        styles[borderClass]
      )}
    ></div>
  );
};

export default Cell;
