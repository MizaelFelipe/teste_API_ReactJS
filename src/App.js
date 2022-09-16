import { Component } from "react";
import api from "./api";

class App extends Component {

  state = {

    post: [],
  }

  async componentDidMount() {

    const response = await api.get('');


    this.setState({ post: response.data })
  }




  render() {

    const { post } = this.state;

    return (
      <div>
        <h1>Listar</h1>
        {post.map(post => (
          <tr key={post.title.id}>

            <h2>
              <strong>Titulo:</strong>
            </h2>
            {post.title}
            <br></br>
            <h3>Corpo</h3>
            <br></br>
            {post.body}

          </tr>
        ))}

      </div>
    )
  }
}



export default App;


