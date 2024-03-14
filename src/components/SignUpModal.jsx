const SignupModal = ({ signupModalOpen, setSignupModalOpen }) => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const saveToSignup = async (e) => {
      // Implement sign-up logic here
    };
  
    return (
      <form
        onSubmit={saveToSignup}
        className='flex flex-col items-center justify-center gap-2'
      >
        <p>Create an account</p>
        <input
          name='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          className='w-full max-w-xs input input-bordered'
          placeholder='Email'
        />
        <input
          name='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          className='w-full max-w-xs input input-bordered'
          placeholder='Password'
        />
        <button disabled={loading} className='w-full max-w-xs btn btn-outline'>
          {loading ? (
            <>
              <span className='loading loading-spinner' />
              <p>Loading..</p>
            </>
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
    );
  };

  export default SignupModal;