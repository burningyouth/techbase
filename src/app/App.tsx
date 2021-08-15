import { Link, Route, Switch } from "wouter"
import { Login } from "../pages/Login"
import { Routes } from "../shared/routes"
import "../shared/ui/theme.css"
import { Layout } from "../templates/Layout"
import { Dictionary } from "lodash"
import React from "react"
import { Registration } from "../pages/Registration"

const pathToPage: Dictionary<React.ReactNode> = {
  [Routes.login.path]: <Login />,
  [Routes.register.path]: <Registration />,
}

const menu = Object.values(Routes).map((item) => (
  <Link href={item.path}>{item.label}</Link>
))

const routes = Object.values(Routes).map((value) => (
  <Route path={value.path}>{pathToPage[value.path] || null}</Route>
))

function App() {
  return (
    <Layout menu={menu}>
      <Switch>{routes}</Switch>
    </Layout>
  )
}

export default App
