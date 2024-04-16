import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../../data.js'

const CoreConcepts = () => {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>

            <ul>
                {CORE_CONCEPTS.map((item) => (
                    <CoreConcept key={item.id} {...item} />
                ))}
            </ul>
        </section>
    )
}

export default CoreConcepts
