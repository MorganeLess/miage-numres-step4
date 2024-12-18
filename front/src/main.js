import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
          <p>Pour accéder à la page <a href="about/" aria-label="Aller à la page À propos" style="text-decoration: none;">À propos</a>, cliquez ici.</p>
        </div>

        <div class="topnav" role="navigation" aria-label="Liens vers les réseaux sociaux">
          <a href="#" class="fa fa-facebook" aria-label="Lien Facebook"></a>
          <a href="#" class="fa fa-twitter" aria-label="Lien Twitter"></a>
          <a href="#" class="fa fa-google" aria-label="Lien Google"></a>
          <a href="#" class="fa fa-linkedin" aria-label="Lien LinkedIn"></a>
          <a href="#" class="fa fa-youtube" aria-label="Lien YouTube"></a>
          <a href="#" class="fa fa-instagram" aria-label="Lien Instagram"></a>
          <a href="#" class="fa fa-pinterest" aria-label="Lien Pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost" aria-label="Lien Snapchat"></a>
          <a href="#" class="fa fa-skype" aria-label="Lien Skype"></a>
          <a href="#" class="fa fa-android" aria-label="Lien Android"></a>
          <a href="#" class="fa fa-dribbble" aria-label="Lien Dribbble"></a>
          <a href="#" class="fa fa-vimeo" aria-label="Lien Vimeo"></a>
          <a href="#" class="fa fa-tumblr" aria-label="Lien Tumblr"></a>
          <a href="#" class="fa fa-vine" aria-label="Lien Vine"></a>
          <a href="#" class="fa fa-foursquare" aria-label="Lien Foursquare"></a>
          <a href="#" class="fa fa-stumbleupon" aria-label="Lien StumbleUpon"></a>
          <a href="#" class="fa fa-flickr" aria-label="Lien Flickr"></a>
          <a href="#" class="fa fa-yahoo" aria-label="Lien Yahoo"></a>
          <a href="#" class="fa fa-reddit" aria-label="Lien Reddit"></a>
          <a href="#" class="fa fa-rss" aria-label="Lien RSS"></a>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>Description</h5>
              <div id="quiz" role="region" aria-labelledby="quiz-heading">
                <h2 id="quiz-heading">À toi de jouer</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.png" alt="Image décorative représentant une question" width="500" height="600">
            </div>
          </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`;

initQuizz();
