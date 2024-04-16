import { useState } from 'react'

import { EXAMPLES } from '../../data.js'
import Section from '../Section/Section'
import Tabs from '../Tab/Tabs.js'
import Buttons from '../Tab/Button.js'

const Examples = () => {
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
        <Section title="Examples">
            <Tabs
                ButtonContainer="menu"
                buttons={
                    <>
                        <Buttons
                            isSelected={selectedTopic === 'components'}
                            onClick={() => handleSelect('components')}
                        >
                            Components
                        </Buttons>
                        <Buttons
                            isSelected={selectedTopic === 'jsx'}
                            onClick={() => handleSelect('jsx')}
                        >
                            JSX
                        </Buttons>
                        <Buttons
                            isSelected={selectedTopic === 'props'}
                            onClick={() => handleSelect('props')}
                        >
                            Props
                        </Buttons>
                        <Buttons
                            isSelected={selectedTopic === 'state'}
                            onClick={() => handleSelect('state')}
                        >
                            State
                        </Buttons>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    )
}

export default Examples
