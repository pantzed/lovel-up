import * as React from 'react';
import './Chat.css';
import io from 'socket.io-client';

const socket = io.connect('https://lovel-up-socket.herokuapp.com/');

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    
    let message = document.getElementById('m');
    let submit = document.getElementById('submit');

    submit.addEventListener("click", (event) => {
      event.preventDefault();
      socket.emit('chat message', message.value);
      message.value = '';
    });
  
    socket.on('chat message', (msgs)=> {
      if (this._isMounted === true){
        this.setState({
          messages: msgs,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className='d-flex justify-content-end mt-2'>
          <button type='button' className='btn btn-outline-primary btn-sm'onClick={(e) => this.props.activatePage(e, 'MATCHES', 'CHAT')}>Back</button>
        </div>
        <div className='row d-flex justify-content-center screen-height'>
          <div className='col-11'>
            <div className='row'>
              <div className='col-12 pt-3 pb-2 border-bottom text-center'>
                <h5>{this.props.match.name}</h5>
                <h6>Lovel {this.props.match.lvl}</h6>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <ul id="messagesContainer" className='chat-stream mt-4 text-light'>
                  <li className='py-3 pl-2 pr-5 my-1 align-self-start bg-primary rounded shadow-sm'>Hello!</li>
                  <li className='py-3 pl-2 pr-5 my-1 align-self-end bg-info rounded shadow-sm'>Hi!</li>
                  {this.state.messages.map((message, index)=>{
                    return  <li key={index} className='py-3 pl-2 pr-5 my-1 align-self-start bg-primary rounded shadow-sm'>{message}</li>
                  })}
                </ul>
              </div>
            </div>
            <div className='row mt-5 border-top'>
              <div className='col-12 mt-3'>
                <form action='' className='form-inline'>
                  <div className='form-group m-0'>
                    <input id='m' className="form-control" type="text" placeholder="Default input" />
                  </div>
                  <button id='submit' type='submit' className='btn btn-outline-primary ml-2'>Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

}

export default Chat;