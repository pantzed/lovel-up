import * as React from 'react';
import ProgressBar from'./ProgressBar';
import './Chat.css';
import io from 'socket.io-client';

let socket = io.connect('https://lovel-up-socket.herokuapp.com/');

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.getMessageHistory();
    this._isMounted = false;
    this.getMessageHistory = this.getMessageHistory.bind(this);
    socket.open();
  }

  getMessageHistory() {
    fetch(`/messages/${this.props.match.match_id}`, {
      method: 'GET', 
      mode: 'cors',
      redirect: "follow",
      referrer: "no-referrer"
    })
    .then((res) => {
      return res.text()
    })
    .then((text) => JSON.parse(text))
    .then((messageHistory) => {
      if (messageHistory) {
        this.setState({
          messages: this.state.messages.concat(messageHistory),
        })
      }
    })
  }

  componentDidMount() {

    this._isMounted = true;
    
    let messageValue = document.getElementById('m');
    let submit = document.getElementById('submit');

    submit.addEventListener("click", (event) => {
      event.preventDefault();
      this.props.addPoints(1); // ++ One Point for sent message! ++
      const messageObj = {
        message: messageValue.value,
        user_id: this.props.userData[0].id,
        match_id: this.props.match.match_id,
        created_at: Date.now()
      };

      socket.emit('chat message', messageObj);

      messageValue.value = '';

      fetch('/messages', {
        method: 'POST', 
        mode: 'cors',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify([messageObj])
      })
    });
  
    socket.on('chat message', (msgs)=> {
      if (this._isMounted === true){
        this.setState({
          messages: this.state.messages.concat(msgs),
        });
      }
    });
  }

  componentDidUpdate() {
    if (this.state.messages.length - 1 > 0) {
      let targetMsg = this.state.messages.length - 1;
      let scrollToElement = document.getElementById(`msg-${targetMsg}`);
      scrollToElement.scrollIntoView();
    }
  }

  render() {

    const messages = this.state.messages;
    const fakePhoto = 'https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg';

    return (
      <div>
        <div className='chat-menu text-right'>
          <button type='button' className='btn btn-outline-primary btn-sm'onClick={(e) => this.props.activatePage(e, 'matches', 'chat')}>Back</button>
        </div>
        <div className='chat-match'>
          <div className='chat-match-flex pl-4'>
          <img src={this.props.match.photo_1 || fakePhoto}
               className='img chat-match-img rounded-circle border'
               alt='match'>
          </img>
          <div className='chat-match-info-flex pl-3'>
            <span className='chat-match-name'>{`${this.props.match.first} ${this.props.match.last}`}</span>
            <span className='chat-match-lovel'>Lovel: {this.props.match.level}</span>
          </div>
          </div>
        </div>
        <div id="messagesContainer" className='mb-5'>
          <ul id='chatStream' className='chat-stream mt-4 text-light'>
            {messages.map((message, index)=> {
              if (message.user_id === this.props.userData[0].id) {
                return <li key={index} id={`msg-${index}`} className='py-3 pl-3 pr-5 my-1 align-self-end bubble-a'>{message.message}</li>
              }
              else {
                return  <li key={index} id={`msg-${index}`} className='py-3 pl-3 pr-5 my-1 align-self-start bubble-b'>{message.message}</li>
              }
            })}
          </ul>
        </div>
        <div className='chat-input'>
          <div className='col-11 mt-3'>
            <ProgressBar width={100} height={10} userData={this.props.userData[0]} justify={'start'} alignText={'left'}/>
            <form action='' className='form-inline mt-4'>
              <div className='row form-group m-0'>
                <input id='m' className="form-control" type="text" placeholder="Default input" />
              </div>
              <button id='submit' type='submit' className='btn btn-outline-primary ml-2'>Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
    socket.close();
  }

}

export default Chat;