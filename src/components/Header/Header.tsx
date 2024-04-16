import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1))
}

const reactDescription = ['Fundamental', 'Crutial', 'Core']

const Header = () => {
    const description = reactDescription[getRandomInt(2)]

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>

            <p>
                {description} React concepts you will need for almost any app
                you are going to
            </p>
        </header>
    )
}

export default Header
