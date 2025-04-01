import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useRef.current.focus()
  }, []);

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd]);


  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='asertive'>
        {errMsg}
      </p>
    </section>
  )
}

export default Login
