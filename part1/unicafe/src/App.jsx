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

const Button = ({onClick, text}) => <button style={{border: "1px solid black"}} onClick={onClick}>{text}</button>

const StatisticLine = ({stat, text, sufix}) => <tr><td>{text}:  </td><td>{stat}{sufix}</td></tr>

const Statistics = ({props}) => {
  let good, neutral, bad, all;
  ({good, neutral, bad, all} = props)
  if (all > 0)
    return (
        <table>
          <tbody>
            <StatisticLine text='Good' stat={good}/>
            <StatisticLine text='Neutral' stat={neutral}/>
            <StatisticLine text='Bad' stat={bad}/>
            <StatisticLine text='All' stat={all}/>
            <StatisticLine text='Average' stat={((good-bad)/all).toFixed(1)}/>
            <StatisticLine text='Positive' stat={((good/all)*100).toFixed(1)} sufix={'%'}/>
          </tbody>
        </table>
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
    <>
      <Headline text='Give feedback'/>
      <Button onClick={increaseStatBy('Good', 1)} text='Good'/>
      <Button onClick={increaseStatBy('Neutral', 1)} text='Neutral'/>
      <Button onClick={increaseStatBy('Bad', 1)} text='Bad'/>
      <div>
        <Headline text='Statisticstics'/>
      </div>
      <Statistics props={{'good':good, 'bad':bad, 'neutral':neutral, 'all':all}}/>
    </>
  )
}

export default App
