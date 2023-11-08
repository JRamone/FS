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

const StatisticLine = ({stat, text, sufix}) => <p>{text}:  {stat}{sufix}</p>

const Statistics = ({props}) => {
  let good, neutral, bad, all;
  ({good, neutral, bad, all} = props)
  if (all > 0)
    return (
        <div>
          <StatisticLine text='Good' stat={good}/>
          <StatisticLine text='Neutral' stat={neutral}/>
          <StatisticLine text='Bad' stat={bad}/>
          <StatisticLine text='All' stat={all}/>
          <StatisticLine text='Average' stat={(good-bad)/all}/>
          <StatisticLine text='Positive' stat={(good/all)*100} sufix={'%'}/>
        </div>
      )
  return <div>no ratings yet</div>
  }

 
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
      <Statistics props={{'good':good, 'bad':bad, 'neutral':neutral, 'all':all}}/>

    </div>
  )
}

export default App
