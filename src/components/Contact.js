import React from 'react';
function Contact() {
    return (
        <div class="container">
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="text" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Enter Information</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>

    )
}

export default Contact;