import { RootState } from "store";
import { clsnm } from "utils/clsnm";
import { cornerClassGenerator } from "utils/cornerClassGenerator";
import styles from "./Cell.module.scss";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";

type CellProps = {
  row: number;
  column: number;
};

const Cell = ({ row, column }: CellProps) => {
  const { table } = useSelector((state: RootState) => state.game);
  const borderClass =
    cornerClassGenerator({
      row,
      column,
      rows: table.rows,
      columns: table.columns,
    }) || "";

  const [{ isOver, dropabble }, drop] = useDrop({
    accept: "1",
    drop: (item, monitor) => {
      //function
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      dropabble: !!monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={clsnm(
        styles.cell,
        table?.rows - 1 === row && styles.lastRow,
        table?.columns - 1 === column && styles.lastCol,
        isOver && styles.over,
        dropabble && styles.dropabble,
        styles[borderClass]
      )}
    ></div>
  );
};

export default Cell;
