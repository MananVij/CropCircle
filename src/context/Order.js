import React from 'react';

export const OrderContext = React.createContext();

const OrderContextProvider = ({children}) => {
  const [order, setOrder] = React.useState([]);
  return (
    <OrderContext.Provider value={{order, setOrder}}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
