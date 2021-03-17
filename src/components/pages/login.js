import TextField from "@material-ui/core/TextField";
import { Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
const Login = (props) => {
  var infoAuthentification = {
    mail: "",
    pass: "",
  };

  const HandleChangeMail = (event) => {
    infoAuthentification.mail = event.target.value;
  };
  const HandleChangePass = (event) => {
    infoAuthentification.pass = event.target.value;
  };
  return (
    <Container maxWidth="sm" style={{}}>
      <Box
        border={1}
        display="flex"
        flexDirection="column"
        style={{ borderRadius: 15, borderColor: "#CACACA" }}
      >
        <header className="header">
          <Route
            render={({ history }) => (
              <button
                className="btn"
                key="inscription"
                style={{ backgroundColor: "#008000", marginLeft: "auto" }}
                onClick={() => {
                  history.push("/sign-up");
                }}
              >
                Créer un compte
              </button>
            )}
          />
        </header>
        <Box display="flex" flexDirection="column">
          <TextField
            id="Mail"
            label="Adresse e-Mail"
            style={{ margin: 8 }}
            margin="normal"
            variant="outlined"
            onChange={HandleChangeMail}
          />
          <TextField
            id="Password"
            label="Mot de passe"
            style={{ margin: 8 }}
            margin="normal"
            type="password"
            variant="outlined"
            onChange={HandleChangePass}
          />
        </Box>
        <footer>
          <button
            className="btn"
            key="connection"
            style={{
              backgroundColor: "transparent",
              color: "#000000",
              borderColor: "#000000",
            }}
            onClick={() => {
              props.onConnection(infoAuthentification);
            }}
          >
            {" "}
            Se connecter{" "}
          </button>
        </footer>
      </Box>
    </Container>
  );
};

export default Login;
