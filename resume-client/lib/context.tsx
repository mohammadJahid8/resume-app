/* eslint-disable react/prop-types */

import api from '@/utils/axiosInstance';
import { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext<any>({});

export function useAppContext() {
  return useContext(UserContext);
}

const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userRefetch, setUserRefetch] = useState(false);

  const [usersRefetch, setUsersRefetch] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    title: '',
    state: '',
    zip: '',
    smsAlerts: false,
    summary: '',
    workExperience: '',
    education: '',
    skills: '',
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const getAllUsers = async () => {
        const response = await api.get(`/users`);

        setUsers(response?.data?.data);
      };
      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  }, [user?.role, usersRefetch]);

  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);

      try {
        const promise = await api.get(`/users/profile`);

        setUser(promise.data.data);
        setIsLoading(false);
      } catch (error: any) {
        console.log(error);
        setIsLoading(false);
        if (error.response.data.message === 'Invalid Token!') {
          localStorage.removeItem('rmToken');
        }
      }
    };

    getProfile();
  }, [userRefetch]);

  const logout = () => {
    window.localStorage.removeItem('rmToken');
    setUser({});
  };

  const authInfo = {
    isLoading,
    userRefetch,
    setUserRefetch,
    setIsLoading,
    user,
    loading,
    setLoading,
    users,
    usersRefetch,
    setUsersRefetch,
    logout,
    formData,
    setFormData,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default ContextProvider;
