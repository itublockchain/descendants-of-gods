type CornerClassGeneratorProps = {
  rows: number;
  columns: number;
  row: number;
  column: number;
};

export const cornerClassGenerator = ({
  rows,
  columns,
  row,
  column,
}: CornerClassGeneratorProps) => {
  const topLeft = row === 0 && column === 0;
  const topRight = row === 0 && column === columns - 1;
  const bottomLeft = row === rows - 1 && column === 0;
  const bottomRight = row === rows - 1 && column === columns - 1;

  let newClass = "border-";

  if (topLeft) {
    return newClass + "top-left";
  } else if (topRight) {
    return newClass + "top-right";
  } else if (bottomLeft) {
    return newClass + "bottom-left";
  } else if (bottomRight) {
    return newClass + "bottom-right";
  }
};
