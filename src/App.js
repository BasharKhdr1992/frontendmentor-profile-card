import React from 'react';
import './App.css';
import Appendix from './component/Appendix';
import ProfileCard from './component/ProfileCard';

const App = () => {
  return (
    <div className="wrapper">
      <ProfileCard />
      <Appendix />
    </div>
  );
};

export default App;
