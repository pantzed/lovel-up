import * as React from 'react';
import './Chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                <ul className='chat-stream mt-4 text-light'>
                  <li className='py-3 pl-2 pr-5 my-1 align-self-start bg-primary rounded shadow-sm'>Hello!</li>
                  <li className='py-3 pl-2 pr-5 my-1 align-self-end bg-info rounded shadow-sm'>Hi!</li>
                  <li className='py-3 pl-2 pr-5 my-1 align-self-start bg-primary rounded shadow-sm'>Let's date?</li>
                  <li className='py-3 pl-2 pr-5 my-1 align-self-end bg-info rounded shadow-sm'>OK!</li>
                </ul>
              </div>
            </div>
            <div className='row mt-5 border-top'>
              <div className='col-12 mt-3'>
                <form action='' className='form-inline'>
                  <div className='form-group m-0'>
                    <input className="form-control" type="text" placeholder="Default input" />
                  </div>
                  <button type='submit' className='btn btn-outline-primary ml-2'>Send</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Chat;