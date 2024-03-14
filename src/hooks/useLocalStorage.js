import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

/**
 * A custom hook for managing state that is persisted in the local storage.
 *
 * @param {string} userInfo - The key in the local storage where the state should be stored.
 * @param {any} initialValue - The initial value of the state.
 *
 * @returns {Array} An array containing the current value of the state
 * and a function to update it.
 */
const useLocalStorage = (userInfo) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    const history = useHistory();
    if (!userInfo) {
      // history.push("/");
      return;
    }
  }, [history]);

  // const setValue = (value) => {
  //   try {
  //     const valueToStore =
  //       value instanceof Function ? value(storedValue) : value;

  //     setStoredValue(valueToStore);

  //     window.localStorage.setItem(key, JSON.stringify(valueToStore));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const removeValue = (value) => {
  //   window.localStorage.removeItem(value);
  // };
  return [user, setUser];
};

export default useLocalStorage;
