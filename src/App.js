import React, { Component } from 'react'
 
export class App extends Component {
  state = {};
  changeHandle = e => {
    this.setState({[e.target.name]: e.target.value}); 
   }
    render() {
    
     return (
      <div>
        
        <form className='container col-4 bg-warning rounded-lg' onSubmit={e => {
            e.preventDefault();
            this.props.dispatchRegisterFlight(this.state);
          }}>
        <h1 className='text-center text-dark'>Register Form</h1>
          <div className="row justify-content-sm-center">
            <div className="col-10">
              <label>FN: </label>
              <input type="text" name="fn" className="form-control" onChange={this.changeHandle} />
            </div>

            <div className="col-10">
              <label>DES: </label>
              <input type="text" name="des" className="form-control"onChange={this.changeHandle} />
            </div>

            <div className="col-10">
              <label>DEP: </label>
              <input type="text" name="dep" className="form-control" onChange={this.changeHandle}/>
            </div>

            <div className='col-10'>
              <label>Date: </label>
              <input type="date" name="date" className="form-control" onChange={this.changeHandle}/>
            </div>

          </div>
          
          <button type="submit" className="form-control mt-3 btn btn-outline-dark  mb-4" > Submit </button>
        </form>
      </div>
    )
  }
}
 export default App 
