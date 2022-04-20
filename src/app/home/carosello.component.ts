import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosello',
  template: `
          <div class="scrollmenu" id="scroll">
            <div class="card">
                <div class="cardcontainer">
                    <img src="../../assets/cvs.jpg" height="50%" width="100%">
                    <a href="www.google.it"><h1 class="titolo" align="center">Ciao blog!</h1></a>
                    <p align="center">Ciao benvenuto nel mio blog! Questa è una scheda di prova :o<br>
                        cosa scriverò oggi?? hmmmmm <br>
                        credo proprio niente<br>
                        ahah oggi piove...<br>
                    </p>
                    <a class="mail" href="www.google.it" align="center">Read more...</a>
                </div>
            </div>
            <div class="card">
                <div class="cardcontainer">
                    <img src="../../assets/cvs.jpg" height="50%" width="100%">
                    <a href="www.google.it"><h1 class="titolo" align="center">Ciao blog!</h1></a>
                    <p align="center">Ciao benvenuto nel mio blog! Questa è una scheda di prova :o<br>
                        cosa scriverò oggi?? hmmmmm <br>
                        credo proprio niente<br>
                        ahah oggi piove...<br>
                    </p>
                    <a class="mail" href="www.google.it" align="center">Read more...</a>
                </div>
            </div>
            <div class="card">
                <div class="cardcontainer">
                    <img src="../../assets/cvs.jpg" height="50%" width="100%">
                    <a href="www.google.it"><h1 class="titolo" align="center">Ciao blog!</h1></a>
                    <p align="center">Ciao benvenuto nel mio blog! Questa è una scheda di prova :o<br>
                        cosa scriverò oggi?? hmmmmm <br>
                        credo proprio niente<br>
                        ahah oggi piove...<br>
                    </p>
                    <a class="mail" href="www.google.it" align="center">Read more...</a>
            </div>
            <div class="card">
                <div class="cardcontainer">
                    <img src="../../assets/cvs.jpg" height="50%" width="100%">
                    <a href="www.google.it"><h1 class="titolo" align="center">Ciao blog!</h1></a>
                    <p align="center">Ciao benvenuto nel mio blog! Questa è una scheda di prova :o<br>
                        cosa scriverò oggi?? hmmmmm <br>
                        credo proprio niente<br>
                        ahah oggi piove...<br>
                    </p>
                    <a class="mail" href="www.google.it" align="center">Read more...</a>
            </div>
            <div class="card">
                <div class="cardcontainer">
                    <img src="../../assets/cvs.jpg" height="50%" width="100%">
                    <a href="www.google.it"><h1 class="titolo" align="center">Ciao blog!</h1></a>
                    <p align="center">Ciao benvenuto nel mio blog! Questa è una scheda di prova :o<br>
                        cosa scriverò oggi?? hmmmmm <br>
                        credo proprio niente<br>
                        ahah oggi piove...<br>
                    </p>
                    <a class="mail" href="www.google.it" align="center">Read more...</a>
            </div>
        </div>
  `,
  styles: [`
  div.scrollmenu {
    background-color: rgb(255, 255, 255);
    overflow: auto;
    white-space: nowrap;
    display: flex;
    height: 70vh;
    overflow-x: scroll;
}
div.card{
    white-space:normal;
    border-radius: 30px;
    display:flex;
    flex-direction: column;
    padding-top: 4vh;
    align-items: center;
    color: black;
    margin: 30px 0px 30px 20px;
    flex-basis: 130vh;
    flex-grow: 0;
    flex-shrink: 0;
    background-color: rgb(221, 221, 221);
    text-align: left;
}
div.cardcontainer{
    height: 90%;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
img {
    border-radius: 30px;
}
h1.titolo{
    color: #876db1;
    font-size: 45px;
}
p {
    line-height: 22px;
}
a:last-of-type{
    margin-top: auto;
}
  `]
})
export class CaroselloComponent{

  constructor() { }

  

}
