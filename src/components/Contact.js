import React from 'react';
function Contact() {
    return (
        <div class="container">
          <h3>Contact Me</h3>
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
  <button type="submit" className="btn btn-primary">Submit</button>
  <a href="https://www.linkedin.com/in/ahmed-bule-55b043a1/" target="_blank">
          <img src="assets/images/linkedIn-icon.jpg" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/AhmedBule/" target="_blank">
            <img src="assets/images/github-icon.jpg" alt="github"/>
            </a>

 <a href="mailto:ahmedbule01@gmail.com">Email me</a>


</form>
        </div>

    )
}

export default Contact;