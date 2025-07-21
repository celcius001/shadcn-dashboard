import { doSocialLogin } from '@/lib/actions/loginSetup';
import React from 'react';

const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
      <button className="m-2 rounded-md bg-pink-400 p-2 text-white" name="action" value="google">
        Sign In With Google
      </button>
      <button className="m-2 rounded-md bg-blue-400 p-2 text-white" name="action" value="github">
        Sign In With Github
      </button>
    </form>
  );
};

export default SocialLogin;
