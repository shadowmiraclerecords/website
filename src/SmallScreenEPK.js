// import profile from './kingstonminelive.png';
import white from './white.png';
import hmm from './wow.png';
import smr from './smr.png';
import React from "react";
import { Link } from 'react-router-dom';
import './SmallScreenEPK.css';

class SmallScreenEPK extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wow: ""
    };
  }

  render() {
    return (
        <div className="Small-app">
          <div className="Small-top">
            <img src={hmm} className="Small-profile" alt="profile"/>
            <a href="https://www.instagram.com/ranesimons/">
                <img src={white} className="Small-insta" alt="insta" />
            </a>
            <Link to="/">
              <img src={smr} className="Small-smr" alt="smr" />
            </Link>
            <h1 className="Small-title">Rane Simons</h1>
          </div>
          <p className="Small-bio">is an indie singer-songwriter whose folk and blues inspired sound has been compared to James Taylor, George Harrison, and Jeff Buckley.&nbsp;
          Having grown up in Makanda, he got his first taste of performing for a festival during the spring of 2010 in what is now known as the Shawnee Cave Amphitheater.&nbsp;
          He went on to live in Champaign-Urbana playing various gigs for three years with the Illini Contraband before moving to Chicago.&nbsp;
          Traveling the summer of 2014 opened him to the thrill of street performing in Asheville, Portland, and Seattle.&nbsp;
          Back in Chicago, he returned to playing with a new band which culminated in a tour through Mississippi and New Orleans.&nbsp;
          After performing on Frenchmen street late into the night, he decided to focus on singing solo on Michigan Ave upon returning to Chicago.&nbsp;
          He has moved into recording and producing music with his entirely self-created EP Synchronicities and a new collaborations project called The Prince of Venus in his shared recording studio near Wrigley Field.</p>
          <h1 className="Small-music">Music</h1>
          <iframe className="Small-songs" title="It&#x27;s Never Goodbye - Remastered 2021" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/958257244&show_playcount=false&color=%23080808&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <iframe className="Small-songs" title="Our Love Remains - Remastered 2021" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/958260820&show_playcount=false&color=%23080808&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <iframe className="Small-songs" title="Synchronicities - Remastered 2021" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/958262881&show_playcount=false&color=%23080808&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <iframe className="Small-songs" title="The Golden Light - Remastered 2021" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/958261585&show_playcount=false&color=%23080808&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <iframe className="Small-songs" title="Alright" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1068004219&show_playcount=false&color=%23080808&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <iframe className="Small-songs" title="You Gonna Roll The Weed?" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&show_playcount=false&color=%23080808&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <iframe className="Small-songs" title="Set It Free" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206362367&show_playcount=false&color=%23080808&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <h1 className="Small-performances">Performances</h1>
          <div className="Small-venue">Center Camp At Burning Man</div>
          <div className="Small-venue">The Dock At Montrose Beach</div>
          <div className="Small-venue">The Emerald Palace</div>
          <div className="Small-venue">Uncommon Ground</div>
          <div className="Small-venue">FIGMENT Chicago</div>
          <div className="Small-venue">The Canopy Club</div>
          <div className="Small-venue">Cowboy Monkey</div>
          <div className="Small-venue">The Red Herring</div>
          <div className="Small-venue">Krannert Center</div>
          <div className="Small-venue">Kingston Mines</div>
          <div className="Small-venue">Hard Rock Cafe</div>
          <div className="Small-venue">Joe's Brewery</div>
          <div className="Small-venue">The Hangar 9</div>
          <div className="Small-venue">The Utah Inn</div>
          <div className="Small-venue">Illini Union</div>
          <div className="Small-venue">Allen Hall</div>
          <div className="Small-venue">PUB OK</div>
          <div className="Small-venue">PKs Bar</div>
          <h1 className="Small-contact">Contact</h1>
          <a href="mailto:ranesimons@gmail.com" className="Small-email">ranesimons@gmail.com</a>
          <a href="tel:618-559-9394" className="Small-phone">618-559-9394</a>
      </div>
    );
  }
}

export default SmallScreenEPK;
