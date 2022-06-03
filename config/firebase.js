import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCqrkUuqzSaOtzaHX7hg3FMEvvPeQ4oJtM",
  authDomain: "myproject-2af79.firebaseapp.com",
  projectId: "myproject-2af79",
  storageBucket: "myproject-2af79.appspot.com",
  messagingSenderId: "957896049664",
  appId: "1:957896049664:web:83564face05da6f4f304e5",
  measurementId: "G-1DHZVQLRYC"};
let app;
if(firebase.apps.length===0){
  app=firebase.initializeApp(firebaseConfig);

}else{
  app=firebase.app()
}
 const auth=firebase.auth()
 export {auth};
 const authLog=firebase.auth()
 export {authLog};
 export const db=getFirestore(app);
