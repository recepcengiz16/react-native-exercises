import React,{useEffect} from "react";
import {legacy_createStore as createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';
import reducers from "./Reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthProvider = ({children}): Provider => {

    const [user, setUser] = useState(null);
    const [isAuthLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem("user").then(userSession => {
            userSession && setUser(JSON.parse(userSession));
            setAuthLoading(false);
      })
   
    }, [])
    

    const store = createStore(reducers,{user,isAuthLoading}) ;

    return <Provider store={store}>
        {children}
    </Provider>
};

export default AuthProvider;