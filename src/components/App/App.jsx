// @flow
import React, { Suspense } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../../pages/Home/Home"
import Projects from "../../pages/Projects/Projects"
import Articles from "../../pages/Articles/Articles"
import About from "../../pages/About/About"
import Project from "../Project/Project"
import Loading from "../Loading/Loading"
import NotFound from "../NotFound/NotFound"

const ArticlePage = () => {
  const { articleId } = useParams()

  return (
    <div>
      <h3>Article ID: {articleId}</h3>
    </div>
  )
}

const ProjectPage = () => {
  const { projectId } = useParams()

  return <Project projectData={projectId} />
}

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects/:projectId">
              <ProjectPage />
            </Route>
            <Route path="/projects" component={Projects} />
            <Route path="/articles/:articleId">
              <ArticlePage />
            </Route>
            <Route path="/articles" component={Articles} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default App
