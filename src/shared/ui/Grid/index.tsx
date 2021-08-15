import clsx from "clsx"
import classes from "./Grid.module.css"

export type GridProps = React.ComponentProps<"div"> & {
  gap?: number
  rows?: string
  columns?: string
}

export const Grid = ({
  className,
  gap = 4,
  rows = "auto",
  columns = "auto",
  ...props
}: GridProps) => {
  return (
    <div
      className={clsx(className, classes.root)}
      style={{
        gap: `calc(var(--spacing) * ${gap}`,
        gridTemplateRows: rows,
        gridTemplateColumns: columns,
      }}
      {...props}
    />
  )
}
