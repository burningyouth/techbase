import clsx from "clsx"
import { Header } from "../../features/ui/Header"
import { Container } from "../../shared/ui/Container"
import classes from "./Layout.module.css"

export type LayoutProps = React.ComponentProps<"div"> & {
  menu: React.ReactNode
}

export const Layout = ({
  children,
  menu,
  className,
  ...props
}: LayoutProps) => {
  return (
    <div className={clsx(className, classes.root)} {...props}>
      <Header>{menu}</Header>
      {children}
    </div>
  )
}
