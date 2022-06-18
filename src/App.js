import './App.css';
import { signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, database } from './firebase-config'
import { useState, useEffect } from 'react';
import ChatRoom from './components/ChatRoom';
import Nav from './components/Nav';



function App() {
  const [user, setUser] = useState({});


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })



  function signin() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }
  function logout() {
    signOut(auth)
  }
  function scrollChat() {
    const elem = document.getElementById("allChats")
    elem.scrollTop = elem.scrollHeight;
  }
  if (user) {
    return (
      <>
        <Nav logout={logout} />
        <ChatRoom database={database} user={user} />
      </>
    )
  }
  else {
    return (
      <>
        <Nav />
        <div className='btn-cont'>
          <div class="google-btn" onClick={signin}>
            <div class="google-icon-wrapper">
              <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p class="btn-text"><b>Sign in with google</b></p>
          </div>
        </div>
      </>
    )
  }

}

export default App;
