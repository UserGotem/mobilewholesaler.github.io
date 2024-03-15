'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

// NEXT
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

// PROJECT IMPORTS
import Loader from 'components/Loader';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/auth/protected');
      const json = await res?.json();
      if (!json?.protected) {
        router.push('/login');
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, [session]);

  if (status == 'loading' || !session?.user) return <Loader />;

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
