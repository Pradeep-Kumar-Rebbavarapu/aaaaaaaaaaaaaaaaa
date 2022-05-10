import { ToastContainer, toast } from 'react-toastify';
import cookie from 'cookie'

export default async function login(req,res){
  const { username, password,email } = req.body;
  
    try {
      
      console.log('res inside',res);
      let response1 = await fetch('https://my-notebook-my-notebook.herokuapp.com/api/v1/Login/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'username':username,
          'password':password,
          'email':email,
        })
      })
      let data1 = await response1.json()
      
      if (response1.status === 200) {
        var cookie = require('cookie');
        res.setHeader('Set-Cookie',[
          cookie.serialize(
            'access',data1.data.access,{
              httpOnly:true,
              secure:true,
              maxAge:60*30,
              sameSite:'strict',
              path:'/'
          }),
          cookie.serialize(
            'refresh',data1.data.refresh,{
              httpOnly:true,
              secure:true,
              maxAge:60*30*24,
              sameSite:'strict',
              path:'/'
          })
          ]);
        res.status(200).json(data1)
      }
      else {
        res.status(401).json({'message':'login unsuccesful'})
        toast("Log In Unsuccesfully Please Recheck Your Credentials", { position: toast.POSITION.TOP_LEFT })
        console.log(data1)
      }
      
    }
    
    catch (e) {
      toast("Log In Unsuccesfully Please Recheck Your Credentials", { position: toast.POSITION.TOP_LEFT })
      
    }
    
  }