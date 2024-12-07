import { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [appointmentList, SetAppointmentList] = useState([]);

  let name = "shivasai";
  const contextvalue = {
    name,
    appointmentList,
    SetAppointmentList,
  };
  console.log(appointmentList);
  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
