import React, { Component } from "react";
import "../demander.css";

import axios from "axios";
import Footer from "../Footer";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentaire: "",
      note: 10,
      id: "",
    };
  }
  componentDidMount = () => {
    this.setState({ id: this.props.match.params.id });
  };

  render() {
    return (
      <div className="Notetroc">
        <div
          className="Note"
          style={{
            flex: "1",
            flexDirection: "row",
            backgroundImage: "",
            height: "500px",
          }}
        >
          <br />
          <h4 style={{ marginLeft: "80px", color: "blue" }}>Noter le troc</h4>
          <br />

          <form
            class="form-horizontal "
            role="form"
            method="post"
            action="index.php"
          >
            <div class="form-group ">
              <h6 style={{ marginLeft: "15px" }}>Troqueur :</h6>
              <h6 style={{ marginLeft: "15px" }}>Pour son troc :</h6>
              <form>
                <h6 style={{ marginLeft: "15px" }}>
                  Note :
                  <input
                    type="text"
                    name="name"
                    onChange={(event) =>
                      Number((this.state.note = event.target.value))
                    }
                  />{" "}
                  /10
                </h6>
              </form>
            </div>

            <div class="form-group">
              <label for="message" class="col-sm-2 control-label">
                Commentaire:
              </label>
              <div class="col-sm-8">
                <textarea
                  class="form-control"
                  rows="4"
                  name="Message"
                  onChange={(event) =>
                    (this.state.commentaire = event.target.value)
                  }
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-10 col-sm-offset-2">
                <input
                  id="submit"
                  name="submit"
                  value="Envoyer"
                  class="btn btn-primary"
                  onClick={() => {
                    axios.post("/noterTroc", this.state);
                  }}
                  style={{ marginLeft: "450px" }}
                />
              </div>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Note;
