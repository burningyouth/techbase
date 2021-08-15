import clsx from "clsx"
import classes from "./Container.module.css"

export type ContainerProps = React.ComponentProps<"div"> & {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl"
}

export const Container = ({
  className,
  maxWidth = "md",
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx(className, classes.root, classes[maxWidth])}
      {...props}
    />
  )
}
