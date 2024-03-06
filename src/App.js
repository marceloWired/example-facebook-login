import logo from './logo.svg';
import './App.css';
import FacebookLogin from '@greatsumini/react-facebook-login';

function App() {
  return (
    <div className="App">
      <FacebookLogin
        appId="appId"
        scope='instagram_basic,instagram_content_publish,pages_show_list,business_management,instagram_manage_insights'
        onSuccess={(response) => {
          console.log('Login Success!', response);
        }}
        onFail={(error) => {
          console.log('Login Failed!', error);
        }}
        onProfileSuccess={(response) => {
          console.log('Get Profile Success!', response);
        }}
    />
    </div>
  );
}

export default App;