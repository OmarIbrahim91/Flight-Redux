import React, { Component } from 'react'
 
export class App extends Component {
  state = {};
  changeHandle = e => {
    this.setState({[e.target.name]: e.target.value}); 
   }
    render() {
    
     return (
      <div className='container'>
        <div className='row'>
        <form className=' col-12 col-md-12 col-sm-12 bg-dark rounded-lg text-white' onSubmit={e => {
            e.preventDefault();
            this.props.dispatchRegisterFlight(this.state);
          }}>
        <h1 className='text-center text-white'>Flight Form</h1>
          <div className="row justify-content-sm-center">
            <div className="col-12">
              <label>Flight Number: </label>
              <input type="text" name="fn" className="form-control" onChange={this.changeHandle} />
            </div>

            <div className="col-12">
              <label>Destination: </label>
              <input type="text" name="des" className="form-control"onChange={this.changeHandle} />
            </div>

            <div className="col-12">
              <label>Departure: </label>
              <input type="text" name="dep" className="form-control" onChange={this.changeHandle}/>
            </div>

            <div className='col-12'>
              <label>Date: </label>
              <input type="date" name="date" className="form-control" onChange={this.changeHandle}/>
            </div>

          </div>
          
          <button type="submit" className="form-control mt-3 btn btn-danger  mb-4 " > SUBMIT </button>
        </form>


        <table className='table table-bordered  col-12 col-md-12 col-sm-12 text-center bg-dark text-white'>
          <thead className='class="thead-dark"'>
          <tr>
               <th scope="col">#</th>
               <th scope="col">Flight Number:</th>
               <th scope="col">Destination:</th>
               <th scope="col">Departure:</th>
               <th scope="col" colSpan="2">Date</th>
           </tr>
          </thead>
    
              <tbody>
              {this.props.flights.map((f,i)=>(
              <tr key={i}>
              <td className='num'>
                  {i+1+"."}
              </td>
              <td>
                  {f.fn}
              </td>
              <td>
                {f.des}
              </td>
              <td>
                  {f.dep}
              </td>
              <td>
                  {f.date}
              </td>
              <td>
                  <button className='btn btn-danger' name='del'>X</button>
              </td>
          </tr>
          ))}
          </tbody>
   </table>

      </div>
      </div>
    )
  }
}
 export default App 
