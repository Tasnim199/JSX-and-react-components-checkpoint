import logo from './logo.svg';
import './App.css';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import Adress from './component/profile/Adress';

function App() {
  return (
    <div className="App">
      <FullName/>
      <ProfilePhoto/>
      <Adress/>
    </div>
  );
}

export default App;
