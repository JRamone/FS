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

const Statistics = ({stat, text, sufix}) => <p>{text}:  {stat}{sufix}</p>
 
function App() {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [all,setAll] = useState(0)

  const increaseStatBy = (stat,amount) => {
    if (stat == 'Good')
    return () => {
      setGood(good + amount)
      setAll(all + 1)
    }
      
    if (stat == 'Neutral')
    return () => {
      setNeutral(neutral + amount)
      setAll(all + 1)
    }
    if (stat == 'Bad') 
    return () => {
      setBad(bad + amount)
      setAll(all + 1)
    }
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
      <Statistics text='Good' stat={good}/>
      <Statistics text='Neutral' stat={neutral}/>
      <Statistics text='Bad' stat={bad}/>
      <Statistics text='All' stat={all}/>
      <Statistics text='Average' stat={(good-bad)/all}/>
      <Statistics text='Positive' stat={(good/all)*100} sufix={'%'}/>
    </div>
  )
}

export default App
