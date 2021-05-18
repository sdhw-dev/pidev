import React, { Component } from "react";
import "../../App.css";
import "./Avis.css";

class Avis extends React.Component {
    render(){
        return(
            <div className="Avis">
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
                <div class="container bootdey">
                    <div class="col-md-12 bootstrap snippets">
                        <div class="panel">
                            <div class="panel-body">
                                <textarea class="form-control" rows="2" placeholder="Que pensez-vous?"></textarea>
                                <div class="mar-top clearfix">
                                <button class="btn btn-sm btn-primary pull-right" type="submit"><i class="fa fa-pencil fa-fw"></i>Partager</button>
                              
                              
                            </div>
                            </div>
                        </div>
                        <div class="panel">
                            <div class="panel-body">

                                <div class="media-block">
                                <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"/></a>
                                <div class="media-body">
                                <div class="mar-btm">
                                <a href="#" class="btn-link text-semibold media-heading box-inline">Lisa D.</a>
                                
                                </div>
                                <p>consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                <div class="pad-ver">
                                    <div class="btn-group">
                                        <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
                                        <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                                    </div>
                                    <a class="btn btn-sm btn-default btn-hover-primary" href="#">Commenter</a>
                                </div>
                                <hr/>
                                <div>
                                    <div class="media-block">
                                        <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png"/></a>
                                        <div class="media-body">
                                            <div class="mar-btm">
                                                <a href="#" class="btn-link text-semibold media-heading box-inline">Bobby Marz</a>
                                                
                                            </div>
                                            <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                            <div class="pad-ver">
                                                <div class="btn-group">
                                                <a class="btn btn-sm btn-default btn-hover-success active" href="#"><i class="fa fa-thumbs-up"></i> Tu l'as aimé</a>
                                                <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                                                </div>
                                                <a class="btn btn-sm btn-default btn-hover-primary" href="#">Commenter</a>
                                            </div>
                                            <hr/>
                                        </div>
                                    </div>

                                    <div class="media-block">
                                        <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar3.png"/></a>
                                        <div class="media-body">
                                            <div class="mar-btm">
                                                <a href="#" class="btn-link text-semibold media-heading box-inline">Lucy Moon</a>
                                                
                                            </div>
                                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate ?</p>
                                            <div class="pad-ver">
                                                <div class="btn-group">
                                                    <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
                                                    <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                                                </div>
                                                <a class="btn btn-sm btn-default btn-hover-primary" href="#">Commenter</a>
                                            </div>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        
                                <div class="media-block pad-all">
                                <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"/></a>
                                <div class="media-body">
                                <div class="mar-btm">
                                    <a href="#" class="btn-link text-semibold media-heading box-inline">John Doe</a>
                                
                                </div>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <img class="img-responsive thumbnail" src="https://via.placeholder.com/400x300" alt="Image"/>
                                <div class="pad-ver">
                                    <span class="tag tag-sm"><i class="fa fa-heart text-danger"></i> 250 Likes</span>
                                    <div class="btn-group">
                                        <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
                                        <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                                    </div>
                                    <a class="btn btn-sm btn-default btn-hover-primary" href="#">Commenter</a>
                                </div>
                                <hr/>

                            
                                <div>
                                    <div class="media-block pad-all">
                                    <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png"/></a>
                                    <div class="media-body">
                                        <div class="mar-btm">
                                            <a href="#" class="btn-link text-semibold media-heading box-inline">Maria Leanz</a>
                                            
                                        </div>
                                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate ?</p>
                                        <div>
                                        <div class="btn-group">
                                            <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
                                            <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                                        </div>
                                        <a class="btn btn-sm btn-default btn-hover-primary" href="#">Commenter</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        )


    }

}

export default Avis;