import React, { useState } from "react";

export const initialCashSet = [
  {id: '200', value: 200, label: "200€",},
  {id: '100', value: 100, label: "100€",},
  {id: '50', value: 50, label: "50€",},
  {id: '20', value: 20, label: "20€",},
  {id: '10', value: 10, label: "10€",},
  {id: '5', value: 5, label: "5€",},
  {id: '2', value: 2, label: "2€",},
  {id: '1', value: 1, label: "1€",},
  {id: '0.5', value: 0.5, label: "50 Cent",},
  {id: '0.2', value: 0.2, label: "20 Cent",},
  {id: '0.1', value: 0.1, label: "10 Cent",},
  {id: '0.05', value: 0.05, label: "5 Cent",},
  {id: '0.02', value: 0.02, label: "2 Cent",},
  {id: '0.01', value: 0.01, label: "1 Cent",},
  {id: 'schuldschein', value: 'Wert dem Suldschein entnehmen', label: "Schuldschein",}
];

export default function App() {
  const [count200, setCount200] = useState('');
  const [count100, setCount100] = useState('');
  const [count50, setCount50] = useState('');
  const [count20, setCount20] = useState('');
  const [count10, setCount10] = useState('');
  const [count5, setCount5] = useState('');
  const [count2, setCount2] = useState('');
  const [count1, setCount1] = useState('');
  const [count05, setCount05] = useState('');
  const [count02, setCount02] = useState('');
  const [count01, setCount01] = useState('');
  const [count005, setCount005] = useState('');
  const [count002, setCount002] = useState('');
  const [count001, setCount001] = useState('');
  const [countSchuldschein, setCountSchuldschein] = useState('');
  const zweihundert  = count200 * (initialCashSet[0].value * 100)
  const einhundert  = count100 * (initialCashSet[1].value * 100)
  const fünfzig  = count50 * (initialCashSet[2].value * 100)
  const zwanzig  = count20 * (initialCashSet[3].value * 100)
  const zehn  = count10 * (initialCashSet[4].value * 100)
  const fünf  = count5 * (initialCashSet[5].value * 100)
  const zwei  = count2 * (initialCashSet[6].value * 100)
  const eins  = count1 * (initialCashSet[7].value * 100)
  const fünfzigCent  = count05 * (initialCashSet[8].value*100)
  const zwanzigCent  = count02 * (initialCashSet[9].value*100)
  const zehnCent  = count01 * (initialCashSet[10].value*100)
  const fünfCent  = count005 * (initialCashSet[11].value*100)
  const zweiCent  = count002 * (initialCashSet[12].value*100)
  const einCent  = count001 *( initialCashSet[13].value*100)
  const schuldschein  =  countSchuldschein *100
  const [result, setResult] = useState('')
  const [headerTxt] = useState('Schön, dass du dich entschieden hast, die Zählmaschine von StefanTheSpider zu nutzen')

  console.log(schuldschein)

  function handleResult () {
    
    return (
      setResult((zweihundert + einhundert + fünfzig + zwanzig + zehn + fünf + zwei + eins + fünfzigCent + zwanzigCent + zehnCent + fünfCent + zweiCent + einCent + schuldschein)/100) 
    )
  }

  

  console.log(zweihundert, einhundert,  fünfzig, zwanzig, zehn,fünf, zwei, eins, fünfzigCent, zwanzigCent, zehnCent, fünfCent, zweiCent, einCent, schuldschein)

  return (
   <div>
    <Header>
      {result === '' ? headerTxt : 'Der neue Bargeldbestand ist: ' + result + '€'}
    </Header>
<div className="geld-in-der-kasse">

<div className="container">
   <h3 className="scheine">{initialCashSet[0].value}'er</h3>
   <input
  type="number"
  value={count200}
  onChange={(e) => setCount200(Number(e.target.value))}
/>
   <h3 className="scheine">= {count200 === '' ? 0 : zweihundert / 100}€</h3>
   </div>

<div className="container">
   <h3 className="scheine">{initialCashSet[1].value}'er</h3>
   <input
  type="number"
  value={count100}
  onChange={(e) => setCount100(Number(e.target.value))}
    />
   <h3 className="scheine">= {count100 === '' ? 0 : einhundert / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[2].value}'er</h3>
   <input
  type="number"
  value={count50}
  onChange={(e) => setCount50(Number(e.target.value))}
    />
   <h3 className="scheine">= {count50 === '' ? 0 : fünfzig / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[3].value}'er</h3>
   <input
  type="number"
  value={count20}
  onChange={(e) => setCount20(Number(e.target.value))}
    />
   <h3 className="scheine">= {count20 === '' ? 0 : zwanzig / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[4].value}'er</h3>
   <input
  type="number"
  value={count10}
  onChange={(e) => setCount10(Number(e.target.value))}
    />
   <h3 className="scheine">= {count10 === '' ? 0 : zehn / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[5].value}'er</h3>
   <input
  type="number"
  value={count5}
  onChange={(e) => setCount5(Number(e.target.value))}
    />
   <h3 className="scheine">= {count5 === '' ? 0 : fünf / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[6].value}'er</h3>
   <input
  type="number"
  value={count2}
  onChange={(e) => setCount2(Number(e.target.value))}
    />
   <h3 className="scheine">= {count2 === '' ? 0 : zwei / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[7].value}'er</h3>
   <input
  type="number"
  value={count1}
  onChange={(e) => setCount1(Number(e.target.value))}
    />
   <h3 className="scheine">= {count1 === '' ? 0 : eins / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[8].value}'er</h3>
   <input
  type="number"
  value={count05}
  onChange={(e) => setCount05(Number(e.target.value))}
    />
   <h3 className="scheine">= {count05 === '' ? 0 : fünfzigCent / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[9].value}'er</h3>
   <input
  type="number"
  value={count02}
  onChange={(e) => setCount02(Number(e.target.value))}
    />
   <h3 className="scheine">= {count02 === '' ? 0 : zwanzigCent / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[10].value}'er</h3>
   <input
  type="number"
  value={count01}
  onChange={(e) => setCount01(Number(e.target.value))}
    />
   <h3 className="scheine">= {count01 === '' ? 0 : zehnCent / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[11].value}'er</h3>
   <input
  type="number"
  value={count005}
  onChange={(e) => setCount005(Number(e.target.value))}
    />
   <h3 className="scheine">= {count005 === '' ? 0 : fünfCent / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[12].value}'er</h3>
   <input
  type="number"
  value={count002}
  onChange={(e) => setCount002(Number(e.target.value))}
    />
   <h3 className="scheine">= {count002 === '' ? 0 : zweiCent / 100}€</h3>
</div>

<div className="container">
   <h3 className="scheine">{initialCashSet[13].value}'er</h3>
   <input
  type="number"
  value={count001}
  onChange={(e) => setCount001(Number(e.target.value))}
    />
   <h3 className="scheine">= {count001 === '' ? 0 : einCent / 100}€</h3>
</div>

<div className="container scheine--new">
   <h3 className="scheine">{initialCashSet[14].value}</h3>
   <input
  type="number"
  value={countSchuldschein}
  onChange={(e) => setCountSchuldschein(Number(e.target.value))}
    />
   <h3 className="scheine">= {countSchuldschein === '' ? 0 : schuldschein / 100}€</h3>
</div>

</div>

<div className="container container--new">

<h1 className="result">Gesamtsumme: {result !== '' ? result : 0} €</h1>
<button className="btn" type="submit" onClick={()=> handleResult()}>
        Gesammtsumme berechnen
      </button>
      
  </div>
   <Footer />
    </div>
  );
}

function Header({children}) {
  return (
    <header>
      <div>
      {children}
    </div>
    </header>
  )
}
function Footer() {
  return (
    <footer>
<div>with ❤️‍🔥 by StefanTheSpider</div>
    </footer>
  )
}
