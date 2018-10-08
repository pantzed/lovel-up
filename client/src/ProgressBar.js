import * as React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {

    const progressContainer = {
      width: `${this.props.width}%`,
      height: `${this.props.height}px`,
    };

    const progressFill = {
      width: `${((this.props.userData.total_exp % 20)/20) * 100}%`,
      height: '100%',
    };

    return (
      <div>
        <div className={`row d-flex justify-content-${this.props.justify}`}>
          <div className={`col-11`}>
            <h6 className={`p1-2 text-${this.props.alignText}`}>Lovel Progress ({this.props.userData.total_exp % 20}/{'20'})</h6>
            <div className='progress-container rounded' style={progressContainer}>
              <div className='progress-bar rounded' style={progressFill}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ProgressBar;