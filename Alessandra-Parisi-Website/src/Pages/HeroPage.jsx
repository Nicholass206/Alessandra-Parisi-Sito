import ProfilePhoto from '/assets/images/ritratto2.jpg'
import Category1 from '/assets/images/Il_Cristo.jpg'
import Category2 from '/assets/images/Altre_Icone.jpg'
import Category3 from '/assets/images/Angeli.jpg'
import Category4 from '/assets/images/Madre_di_Dio.jpg'
import Category5 from '/assets/images/Santi.jpg'
import Category6 from '/assets/images/Le_Feste.jpg' 
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function HeroPage() {


    return(
      <div>
        
         <div className="HeroSection"> 
            <div className="HeroContainer container">
                <h1 className="Rox">Passione per il colore</h1>
                <span >Alessandra parisi</span>
            </div>
        </div>
        
        <div className="ChiSonoSection">
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

        <div className="GalleriaSection">
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
      </div>
    )
}