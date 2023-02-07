import axios from 'axios'

async function getAuthToken() {
    let data = JSON.stringify({
        "clientId": 130,
        "username": "",
        "password": ""
    });

    try {
        const res = await axios({
            method: 'post',
            url: 'https://webbackend.cdsc.com.np/api/meroShare/auth/',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        });
    
        if (res.accountExpired || res.dematExpired){
            console.log("Email or Demat has expired.")
            return null
        }
        
        const token = res.headers['authorization'];
        return token

    } catch (error) {
        console.log(error)
    }
}

export default getAuthToken;
