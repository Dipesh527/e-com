import React from 'react'

const Register = () => {
  return (
    <>
    <div className="container-fluid my-5 text-center">
    <main className="form-signin w-25 m-auto border border-primary border-2 p-2 ">
        <form>
          <img className="mb-4" src="logo192.png" alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <div className="form-floating ">
            <input type="text" className="form-control" id="floatingInput" placeholder="a"/>
            <label for="floatingInput">First Name</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="a"/>
            <label for="floatingInput">Last Name</label>
          </div>
          <div className="form-floating">
            <input type="number" className="form-control" id="floatingInput" placeholder="a"/>
            <label for="floatingInput">Contact Number</label>
          </div>
          
      
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="a"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
          Have an account?Please <a href="signin">Signin</a>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
</div>
    
    </>
  )
}

export default Register