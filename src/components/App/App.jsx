// @flow
import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../../pages/Home/Home"
import Projects from "../../pages/Projects/Projects"
import Articles from "../../pages/Articles/Articles"
import About from "../../pages/About/About"
import Project from "../Project/Project"
import Loading from "../Loading/Loading"
import NotFound from "../NotFound/NotFound"

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route
              path="/projects/:projectId"
              component={() => <Project test="Hello world" />}
            />
            <Route path="/articles" component={Articles} />
            <Route path="/articles/:articleId" component={Articles} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default App
