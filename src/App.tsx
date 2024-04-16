import { useState } from 'react'

import './App.css'
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import Header from './components/Header/Header'

const App = () => {
    const [selectedTopic, setSeletectTopic] = useState('')

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
    }

    return (
        <>
            <Header />
        </>
    )
}

export default App
