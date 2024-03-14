import React, { useState } from 'react'
import SignupModal from './SignUpModal';

const LoginModal = ({loginModalOpen, setLoginModalOpen}) => {

    const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignupModal, setShowSignupModal] = useState(false);

  const savetologin = async(e) => {

  };
  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  const submitHandler = async()=>{
    setLoading(true);
    if(!email || !password){
      toast({
        title : "Please fill all the fields",
        status : 'warning',
        duration : 5000,
        isClosable : true,
        position : 'bottom',
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers : {
          "Content-type" : "application/json",
        },
      };
      const { data } = await axios.post(
        "/user/login",
        {email, password}, config
      );

      toast({
        title : "Login Successful",
        status : 'success',
        duration : 5000,
        isClosable : true,
        position : 'bottom',
      });
      setUser(data);  
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/");
    } catch (error) {
      toast({
        title : "Error Occured!",
        description : error.response.data.message,
        status : 'error',
        duration : 5000,
        isClosable : true,
        position : 'bottom',
      });
      setLoading(false);
    }
  };

  return (
    <>
    <form
    onSubmit={submitHandler}
    className='flex flex-col items-center justify-center gap-2'
    >
   <p>Enter login credential</p>
   <div>
   <label>Email : </label>
   <input
   name='Email'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='email'
        className='w-full max-w-xs input input-bordered'
      />
      </div>
      <div>
      <label>Password : </label>
   <input
   name='Password'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='password'
        className='w-full max-w-xs input input-bordered'
      />
      </div>
      <button disabled={loading} className='w-full max-w-xs btn btn-outline'>
        {loading ? (
          <>
            <span className='loading loading-spinner' />
            <p>Loading..</p>
          </>
        ) : (
          'Submit'
        )}
      </button>
      <div>
        Not Registered ? {' '}
        <p className='inline mt-2 cursor-pointer text-blue-500' onClick={openSignupModal}>
          Create an account
        </p>
        </div>
    </form>
    {showSignupModal && (
        <SignupModal
          signupModalOpen={showSignupModal}
          setSignupModalOpen={closeSignupModal}
        />
      )}
    </>
  )
}

export default LoginModal
