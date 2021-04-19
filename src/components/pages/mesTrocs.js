import React from 'react';
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";

function mesTrocs() {

  return (
    <div className='mestrocs'>
      <div style={{display:'flex', flexDirection:'row'}}>
		  <Sidebar/>
      <article className="my-trocs-liste" style={{maxwidth : '735px'}}>
		
			<nav className="nav-my-trocs">
				<ul>
					<li className="tab-my-troc active">
						<a id="myOffers" href="#myOffersList" className="waves waves-prune" data-no-trigger="true"> 
							Mes Trocs 
						</a>
					</li>
					<li className="tab-my-troc">
						<a id="myDemands" href="#myDemandsList" className="waves waves-prune" data-no-trigger="true"> 
							Les Trocs qui m'interessent						</a>
					</li>
					<li className="tab-my-troc">
						<a id="myTrocTerminated" href="#myTerminatedList" className="waves waves-prune" data-no-trigger="true">
							Trocs terminés						</a>
					</li>  
				<ul>
			</ul></ul></nav>
				
			<div className="container">	
				<div id="myOffersList" className="nav-my-trocs-target" style={{display: 'block'}}>
					<label className="select troc-list-filter">
						<select id="self-troc-filter">
							<option value="201">Tous mes trocs</option>
							<option value="202">Mes Offres</option>
							<option value="203">Mes demandes</option>
						</select>
					</label>
					<div id="offers-content" >
						<ul className="troc-list"><p><br/><br/>Vous n'avez pas de trocs ici<br/><br/></p></ul>
						<div id="more-result-offers" className="more-button" style={{display: 'none'}}>
						  <div className="button">
			  					Voir plus de trocs 			  				</div>
				  				  
						</div>	
					</div>
				</div>		
				
				<div id="myDemandsList" className="nav-my-trocs-target" style={{display: 'none'}}>				
					<label className="select troc-list-filter">
						<select id="others-troc-filter">
							<option value="204">Tous les Trocs</option>
							<option value="205">Trocs "il propose"</option>
							<option value="206">Trocs "il recherche"</option>
						</select>
					</label>  

					<div id="demands-content">
						<ul className="troc-list"></ul>
						<div id="more-result-demands" className="more-button">
						  <div className="button">
			  					Voir plus de trocs  
			  				</div>
				  			<a href="" className="infiniScroll">&nbsp;</a>		  
						</div>
					</div>
				</div> 
			
				<div id="myTerminatedList" className="nav-my-trocs-target" style={{display: 'none'}}>
					<label className="select troc-list-filter">
						<select id="terminated-troc-filter">
							<option value="207">Tous les trocs terminés</option>
							<option value="208">Tous mes propres trocs terminés</option>
							<option value="209">Autres trocs terminés</option>
						</select>
					</label>
				
					<div id="terminated-content">
						<ul className="troc-list"></ul>
						<div id="more-result-terminated" className="more-button">
						  <div className="button">
			  					Voir plus de trocs  
			  				</div>
				  			<a href="" className="infiniScroll">&nbsp;</a>		  
						</div>
					</div>
				</div>
			</div>
							
			<div id="popup-confirm-delete-troc"></div>
			<div id="popup-reason-delete-troc"></div>	
								
		</article>
		</div>
		<Footer/>
    </div>
  );
}

export default mesTrocs;
