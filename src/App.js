// import logo from './logo.svg';
import React from 'react';
import './App.css';


 

class Traduction extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      motDivers : ['pomme',"mère",'père',"chien"],
      couleur : ["bleu", "blanc", "rouge", "noir"],
      traductionSaisie : "",
      motDiversTrad : ['apple', 'mother', 'father','dog'],
      couleurTrad : ["blue", "white", "red", "black"],
      i : 0,
      motTrad : "",  
      score: 0
    };
  }

  BtnCouleur(){
    this.setState({
      motTrad : this.state.couleur,
      motTradVerif :this.state.couleurTrad,
      i:0,
      score:0
    })
  }
  

  BtnMotDivers(){
    this.setState({
      motTrad: this.state.motDivers,
      motTradVerif :this.state.motDiversTrad,
      i:0,
      score:0
    })
  }

  // Reset(){
  //   this.setState({
  //     motTrad: ""
  //   })
  // }*

  ValiderMot (i) {
    this.setState({
      traductionSaisie : this.state.traductionSaisie.value,
      i : this.state.i +1,
      score: this.state.score
    })
    console.info('Valeur de traductionSaisie : ' + this.state.traductionSaisie)
    console.info('Valeur de listeMotVerif : ' + this.state.motDiversTrad)
    this.VerificationMot();
}

 VerificationMot(i){
  console.info('Valeur de du mot de correction : ' + this.state.motTradVerif[this.state.i]) // il faut que je réussisse à remplacer les deux "1" par i, pour l'instant si on remplace la valeur est indéfini.
    if (this.state.traductionSaisie===this.state.motTradVerif[this.state.i]){
      alert ('bonne réponse');
      this.state.score =this.state.score +1
      this.setState({
        score: this.state.score
      })
    }
    else {
      alert ('dommage')
    }
     this.state.i = this.state.i + 1;
     console.info('Valeur de i : ' + this.state.i)
    //  console.info('Valeur case trad : ' + this.state.traductionSaisie.value) 
    // this.Reset();    
    this.FinListe();
    console.info("Score : " + this.state.score)
  }

  FinListe(){
    if (this.state.i>=this.state.couleur.length){
      alert ("fin du jeu")
    }
    else{
      console.info('je suis rentré dans ma condition')
      this.state.traductionSaisie = ""
    }
  }


  render (i){
    return (
      <div className='Test'>
    <header>
      <center>
        <h1>Jeu traduction </h1>
        <br></br>
        <button id="Mot-divers" onClick={() => this.BtnMotDivers()}> Mots divers</button>
        <text>  </text>
        <button id="Couleur" onClick={() => this.BtnCouleur()}> Couleurs</button>
        <br></br>
        <br></br>
      <p>Mot à traduire</p>
      <input type ="text" id='motFra'  value={this.state.motTrad[this.state.i]} ></input>
      <br></br>
      <p>Traduction</p>
      <input type="text" id='motAng' onChange={e => this.setState({ traductionSaisie: e.target.value })}></input>
      <br></br>
      <br></br>
      <button id='Test-button' onClick={() => this.ValiderMot()} >Valider</button>
      <button id='Recommencer'> Recommencer </button>
      <br></br>
      <br></br>
      <text>Score :  </text>
      <meter align="left" 
             id="fuel"
             min="0" max="4"
             low="2" high="3" optimum="4"
             value={this.state.score}>
      </meter>
      </center>
    </header>
  </div>

    )

  }

}

export default Traduction;

class AffichageNouveauMot extends React.Component{
}
// mettre la case a blanc 
// configurer la liste de vérification pour les mots divers
// réfléchir à d'autre options à rajouter


