import clsx from "clsx"
import classes from "./Caption.module.css"

export type CaptionProps = React.ComponentProps<"span"> & {
  color?: "success" | "warning" | "error" | "info"
}

export const Caption = ({ className, color, ...props }: CaptionProps) => {
  return (
    <span
      className={clsx(className, classes.root, color && classes[color])}
      {...props}
    />
  )
}
