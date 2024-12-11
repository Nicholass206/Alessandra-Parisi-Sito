import ProfilePhoto from '/assets/images/ritratto2.jpg'
import Category1 from '/assets/images/Il_Cristo.jpg'
import Category2 from '/assets/images/Altre_Icone.jpg'
import Category3 from '/assets/images/Angeli.jpg'
import Category4 from '/assets/images/Madre_di_Dio.jpg'
import Category5 from '/assets/images/Santi.jpg'
import Category6 from '/assets/images/Le_Feste.jpg'
import Decori from '/assets/images/decori.jpg'
import Lampade from '/assets/images/lampade.jpeg'
import SoggetiPerBambini from '/assets/images/bambini.jpg'
import CeriPasquali from "../data/CeriPasquali.js" 
import Spiritualita from '/assets/images/mostre/Spiritualita e Colori.jpg'
import LibreriaTraspontina from '/assets/images/mostre/tras1.jpg'
import LibreriaPalermo from '/assets/images/mostre/tras-palermo.jpg'
import Bambusa from '/assets/images/mostre/bambusa.jpg'
import Laluce from '/assets/images/mostre/la luce1.jpg'
import {Link} from 'react-router-dom';

export default function HeroPage() {


    return(
      <div>
        
         <div id="home" className="HeroSection"> 
            <div className="HeroContainer container">
                <h1 className="Rox">Passione per il colore</h1>
                <span >Alessandra parisi</span>
            </div>
        </div>
        
        <div  id="chi-sono" className="ChiSonoSection">
            <div className="container">
                <div className="row">
                    <div className="col-5 CSLeft">
                        <h2 className="Rox ChiSono">Chi Sono</h2>
                        <img src={ProfilePhoto} alt="" className="ProfileImage" />
                    </div>
                    <div className="col-6 CSRight">
                        <p>
                        Sono nata nel 1957 a Roma, città in cui sono cresciuta e dove vivo tuttora.
                        Sin dalla più tenera età mi ha affascinato la capacità del colore di aderire al materiale: ho sperimentato diversi tipi di pigmenti ed aggreganti su superfici di ogni tipo. Mi dà gusto dipingere qualsiasi cosa, dall'inferriata a tinta unita al decoro più complesso su materiale pregiato. Amo in particolare le matite, il carboncino e gli acquarelli.    
                        La mia vocazione di iconografa è frutto di un lungo percorso. Da sempre lo sguardo sull'icona mi ha imposto sosta e riflessione.
                        Nel 1997 Simonetta Oro, artista poliedrica residente ad Anzio, mi ha introdotto seriamente nel mondo dell'iconografia e della tecnica bizantina, stimolandomi a sperimentare la preghiera attraverso la scrittura di un'icona e mi ha accompagnato nei primi, non facili, passi.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div id="galleria-icone" className="GalleriaSection">
            <div className="container">
                <h2 className="Rox text-center GalleriaText">Galleria Icone</h2>
                <p className="text-center">
                Le mie Icone sono realizzate secondo la tecnica tradizionale antica con tempera all’uovo e pigmenti di colori naturali su legno trattato con tela e gesso stemperato nella colla. L’icona è un microtempio: i suoi materiali fanno sì che alla sua creazione partecipino i diversi elementi del mondo visibile. Il legno rappresenta il regno vegetale, la colla e l’uovo quello animale, i pigmenti di colore e il gesso quello minerale.
                Le immagini sacre sono dipinte perché possano dare ai fedeli in preghiera la possibilità di entrare in comunione con il loro “archetipo”.
                </p>
                <div className="IconsContainer row">
                    <Link to="/il-cristo" className="col-4 p-0">
                        <img src={Category1} alt="Il Cristo" className="Categories" />
                        <h3 className="CategoryName Rox">Il Cristo</h3>
                    </Link>
                    <Link to="/altre-icone" className="col-4 p-0">
                        <img src={Category2} alt="Altre Icone" className="Categories" />
                        <h3 className="CategoryName Rox">Altre Icone</h3>
                    </Link>
                    <Link to="/angeli" className="col-4 p-0">
                        <img src={Category3} alt="Angeli" className="Categories" />
                        <h3 className="CategoryName Rox">Angeli</h3>
                    </Link>
                    <Link to="/madre-di-dio" className="col-4 p-0">
                        <img src={Category4} alt="Madre di Dio" className="Categories" />
                        <h3 className="CategoryName Rox">Madre di Dio</h3>
                    </Link>
                    <Link to="/santi" className="col-4 p-0">
                        <img src={Category5} alt="Santi" className="Categories" />
                        <h3 className="CategoryName Rox">Santi</h3>
                    </Link>
                    <Link to="/le-feste" className="col-4 p-0">
                        <img src={Category6} alt="Le Feste" className="Categories" />
                        <h3 className="CategoryName Rox">Le Feste</h3>
                    </Link>
                    </div>
            </div>
        </div>

        <div id ="ceri-pasquali" className="CeriPasquali">
            <div className=" CeriPasqualiContainer container"> 
                 <h2 className="CeriPasqualiText text-center Rox">Ceri Pasquali</h2>
                     <div className="items-container">
                             {CeriPasquali.map((item,index) => (
                        <div key={index} className="item">
                             <img src={item.image} alt={item.title} className="item-image" />
                         <h3 className="item-title Rox">{item.title}</h3>
                             <p className="item-description">{item.description}</p>
                        </div>
                             ))}
             </div>
         </div>
         </div>

         <div id="colori" className="coloriInAltreFormeSection">
            <div className=" coloriInAltreFormeContainer container">
                <div className="coloriInAltreFormeText text-center Rox">
                    Colori In Altre <br/>Forme
                </div>
                <p className="text-center Rox">Mi da gusto dipingere qualsiasi cosa, dall’inferriata a tinta unita al decoro più complesso su materiale pregiato: ho sperimentato la pittura su ceramica, porcellana, vetro con le relative cotture; ho trattato seta, cotone, legno e molto altro, ma ho fotografato solo pochi degli oggetti realizzati.

In alcuni casi ho messo le mie mani al servizio di idee altrui cercando di interpretare al meglio il desiderio del committente: incontri positivi per entrambi.</p>
                <div className="IconsContainer Row">
                <Link to="/decori" className="col-4 p-0">
                        <img src={Decori} alt="Decori" className="Categories" />
                        <h3 className="CategoryName Rox">Decori</h3>
                </Link> 
                <Link to="/lampade" className="col-4 p-0">
                        <img src={Lampade} alt="Decori" className="Categories" />
                        <h3 className="CategoryName Rox">Lampade</h3>
                </Link> 
                <Link to="/soggeti-per-bambini" className="col-4 p-0">
                        <img src={SoggetiPerBambini} alt="Decori" className="Categories" />
                        <h3 className="CategoryName Rox">Soggetti</h3>
                </Link> 
                </div>
            </div>
         </div>
      <div id="mostre" className="mostreSection">
        <div className="container mostreContainer">
          <h1 className="Rox text-center mostreText">Mostre</h1>
          <h6 className="text-center Rox">La voce dell’icona è voce della chiesa.</h6>
          <p className="text-center Rox">
            Ho tentato di diffondere questo messaggio attraverso alcune esposizioni in luoghi e contesti diversi.
          </p>
          <div className="mostreIcons row">
            <div className="mostreItem col-4">
              <Link to="/spiritualita-e-colori" className="col-4 p-0">
                <img src={Spiritualita} alt="Spiritualita-e-Colori" className="Categories" />
              </Link>
              <div className="mostreContent">
                <h3 className="CategoryName Rox">Spiritualita e colori</h3>
              </div>
            </div>
            <div className="mostreItem  col-4">
              <div className="mostreContent">
                <h3 className="CategoryName Rox">Libreria Traspontina a Roma</h3>
              </div>
              <Link to="/libreria-traspontina" className=" p-0">
                <img src={LibreriaTraspontina} alt="Libreria Traspontina a Roma" className="Categories" />
              </Link>
            </div>
            <div className="mostreItem  col-4">
              <Link to="/libreria-palermo" className=" p-0">
                <img src={LibreriaPalermo} alt="Decori" className="Categories" />
              </Link>
              <div className="mostreContent">
                <h3 className="CategoryName Rox">Libreria Universitas a Palermo</h3>
              </div>
            </div>
            <div className="mostreItem  col-4">
              <div className="mostreContent">
                <h3 className="CategoryName Rox">Bambusa Garden</h3>
              </div>
              <Link to="/bambusa" className=" p-0">
                <img src={Bambusa} alt="Decori" className="Categories" />
              </Link>
            </div>
            <div className="mostreItem  col-4">
              <Link to="/la-luce" className=" p-0">
                <img src={Laluce} alt="Decori" className="Categories" />
              </Link>
              <div className="mostreContent">
                <h3 className="CategoryName Rox">Condividere per comunicare – La Luce delle Icone</h3>
              </div>
            </div>
          </div>
        </div>
</div>
<div id ="appunti" className="appuntiSection">
  <div className="container appuntiContainer">
    <h2 className="text-center Rox">Appunti</h2>
    <h6 className="text-center Rox" >Condivido volentieri qualche breve appunto tratto da vari testi e seminari; sono pronta a dialogare con chi lo desidera, e ad apprendere da chi mi può insegnare.</h6>
  </div>
</div>

    </div>
    
    )
}