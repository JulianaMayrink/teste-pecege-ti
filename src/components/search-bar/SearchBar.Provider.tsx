import { useContext, useState } from 'react';

import { createContext } from 'react';

const StateContext = createContext({
  order: [],
  setOrder: () => {},
});

export const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  return (
    <StateContext.Provider value={{ order, setOrder }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
