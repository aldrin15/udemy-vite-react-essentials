import { useState } from 'react'

import './App.css'
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts.js'
import TabButton from './components/TabButton.js'

const App = () => {
    const [selectedTopic, setSeletectTopic] = useState('')

    const handleSelect = (selectedButton) => {
        setSeletectTopic(selectedButton)
    }

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
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => (
                            <CoreConcepts
                                key={conceptItem.id}
                                {...conceptItem}
                            />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>

                    <menu>
                        <TabButton
                            isSelected={selectedTopic === 'components'}
                            onSelect={() => handleSelect('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'jsx'}
                            onSelect={() => handleSelect('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'props'}
                            onSelect={() => handleSelect('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'state'}
                            onSelect={() => handleSelect('state')}
                        >
                            State
                        </TabButton>
                    </menu>
                    <div id="tab-content">{tabContent}</div>
                </section>
            </main>
        </>
    )
}

export default App
