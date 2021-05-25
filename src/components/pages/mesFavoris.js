import React from 'react';
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";
function mesFavoris(props) {
  const services=[
    {
        id:'id1',
        nomService:'Service1',
        descritpion:'Descritption du service 1',
    },

    {
     id:'id2',
     nomService:'Service2',
     descritpion:'Descritption du service 2',
     },

     {
         id:'id3',
         nomService:'Service3',
         descritpion:'Descritption du service 3',
     },
   
 
 
 ];
 //<h2>La liste des services</h2>
 /*const nameList= services.map(service =>
     
     <h4> {service.nomService } 
     <br/>
      {service.descritpion}
     <hr/>
     <br/>   
     </h4>
 )*/

 return (
   <div className="mesFavoris">
    
     <div style= {{display:'flex' , flexDirection :'row'}}>
         <Sidebar/>
     <div style={{width:"1500px" , backgroundColor:"#D3D3D3"}}>
         <h1 className="center" style={{textAlign:"center"}}>Ma liste des favoris</h1>
         <hr/>
         <div className="row" style={{marginLeft:"20px"}} >
             {services.map(service =>
              <div className="col s6 m4" key={service.id}>
                  <div className="card horizontal">
                      <div className="card-stacked"></div>
                      <div className="card-content">
                          <p>{service.nomService}</p>
                          <p><small>{service.descritpion.toString()}</small></p> 
                         

                      </div>
                  </div>
             </div>   
                 )}

         </div>
     </div>

     
   </div>
   <Footer/>
   </div>
   
 );
}

export default mesFavoris;
