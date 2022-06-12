import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return <>

  <GlobalStyle />

    <ThemeProvider  theme={lightTheme}>

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      App File
    </ThemeProvider>
    </>
    
}

export default App

