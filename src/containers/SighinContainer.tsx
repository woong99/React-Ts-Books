import React, { useCallback } from 'react';
import Signin from '../components/Signin';

const SighinContainer = () => {
  const login = useCallback((reqData) => {}, []);
  return <Signin login={login} />;
};

export default SighinContainer;
