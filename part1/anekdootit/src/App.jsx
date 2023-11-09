import { useState } from 'react'

// 9.11 ei toimi täysin oikein. Votet joko menee taulukkoon väärin, tai näkyy väärä vote.
// Debuggailuharjoitusta
// Logitellaan ensin votetaulukko ennen ja jälkeen voten asetuksen.
// Lisätään anekdootteihin väliaikaisesti indeksinumerot helpottamaan logitusta
// PÄIVITYS!
// Logiikassa ei näyttäisi olevan vikaa. Reactin setState ovat asynkronisia joten päivitys ei tapahdu samantien.
// Kokeillaan ratkaisuna syöttää setterille argumenttina funktio mikä palauttaa uuden arvon. EI TOIMI.
// Tehdään eniten äänestetyn anekdootin selvittely copy-taulukosta MIKÄ ON AJANTASAINEN. Statesta tehty laskenta tulee jäljessä asynkronisuuden takia.

const App = () => {
  let most_voted_index;
  const anecdotes = [
    '[0] If it hurts, do it more often.',
    '[1] Adding manpower to a late software project makes it later!',
    '[2] The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    '[3] Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '[4] Premature optimization is the root of all evil.',
    '[5] Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    '[6] Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    '[7] The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState((Math.floor(Math.random()*anecdotes.length)))
  const [votes,setVotes] = useState(new Uint8Array(anecdotes.length))
  const [mostvotes,setMostVotes] = useState(selected)

  const randomize = () => setSelected((Math.floor(Math.random()*anecdotes.length)))

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    most_voted_index = copy.indexOf(Math.max(...copy))
    //console.log(most_voted_index)
    //console.log(copy)
    setVotes(copy)
    setMostVotes(most_voted_index)
    
  }

  return (
    <>
    <div>
      {anecdotes[selected]}
    </div>
    <div>
      has {votes[selected]} votes.
    </div>
    <button onClick={randomize}>Randomize</button>
    <button onClick={vote}>vote</button>
    <div>
      Most votes:
    </div>
    <div>
      {anecdotes[mostvotes]} has {votes[mostvotes]} votes.
    </div>
    </>
  )
}

export default App
