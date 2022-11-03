import React,{} from 'react'


function Register() {
  
  
  return (
    <div className="flex min-h-full items-center justify-center py-12 m:px-6 lg:px-8">


      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm 	 mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 bg-amber-100	 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" />
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />
            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />
            <button type="submit" className="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the 
              <a className="no-underline border-b border-grey-dark text-blue-900" href="/">
              <span> </span>  Terms of Service
              </a>   
              <span> and </span>
              <a className="no-underline border-b border-grey-dark text-blue-900	" href="/">
               Privacy Policy
              </a>
            </div>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account ? 
            <a className="no-underline border-b border-blue text-red-900" href="/login">
              <span> </span>Log in
            </a>.
          </div>
        </div>
      </div>
   
    </div>

  )
}

export default Register