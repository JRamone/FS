import { useState } from 'react'

// Unicafe palautteenanto sovellus
// kolme eri palautetta, hyvä, neutraali, huono
// nappulat jokaisen palautteen antamiselle
// tilastot kuinka monta kertaa kutakin palautetta on annettu
//--------------------------------------------------------------------
// Mahdollisimman hyvä jako eri komponentteihin DONE! ?
// Tapahtumankäsittelijät palauttamaan funkkarit, jotta geneeriset toiminnot on helpompi hoitaa DONE!
// TESTAA! DONE!
//--------------------------------------------------------------------
// Kannattaisiko toiminta jakaa komponentteihin, minkä vastuulla olisi tila, käsittely ja näyttö?

const Headline = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Display = ({stat, text}) => <p>{text}:  {stat}</p>
 
function App() {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const increaseStatBy = (stat,amount) => {
    if (stat == 'Good')
    return () => setGood(good + amount)
    if (stat == 'Neutral')
    return () => setNeutral(neutral + amount)
    if (stat == 'Bad')
    return () => setBad(bad + amount)
  }
  

  return (
    <div>
      <div>
        <Headline text='Give feedback'/>
      </div>
      <p><Button onClick={increaseStatBy('Good', 1)} text='Good'/></p>
      <p><Button onClick={increaseStatBy('Neutral', 1)} text='Neutral'/></p>
      <p><Button onClick={increaseStatBy('Bad', 1)} text='Bad'/></p>
      <div>
        <Headline text='Statisticstics'/>
      </div>
      <Display text='Good' stat={good}/>
      <Display text='Neutral' stat={neutral}/>
      <Display text='Bad' stat={bad}/>
    </div>
  )
}

export default App
