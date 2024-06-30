import React, { createContext, useState } from 'react';

export default CompetitionContext = createContext();


export const CompetitionProvider = ({ children }) => {

 const [selectedCompetition, setSelectedComption] = useState({ id: '', title: '', startDate: '', endDate: '', location: '', },);

 const data = {
  selectedCompetition,
  setSelectedComption
 }
 return (
  <CompetitionContext.Provider value={data}>
   {children}
  </CompetitionContext.Provider>
 );
};
