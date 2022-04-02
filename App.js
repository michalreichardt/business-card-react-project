import React from "react"
import ReactDOM from "react-dom"

//components imports
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interest from "./components/Interests.js"
import Media from "./components/Media.js"


export default function App() {
        return (<main>
                    <About />
                    <Info />
                    <Interest />
                    <Media />
                </main>)
}