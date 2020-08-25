import axios from 'axios';

export const register = newUser => {
    return axios
    .post('http://localhost:4000/Users/register',{
        Nama: newUser.Nama,
        Nama_toko: newUser.Nama_toko,
        Username: newUser.Username,
        Password: newUser.Password,
        Alamat: newUser.Alamat,
        Roles:newUser.Roles
    })
    .then(res => {
        console.log("Registed");
        localStorage.setItem('usertoken',res.data.token);
        return res.data;
        //console.log(req.body)
    })
    .catch(err => {
        console.log(err);
        return err;
    })
}

export const login = user =>{
    return axios
    .post('http://localhost:4000/Users/login', {
        Username: user.Username,
        Password: user.Password,
        Roles: user.Roles
    })
    .then(res =>{
        console.log(res.data);
        localStorage.setItem('usertoken',res.data.token)
        return res.data
        
    })
    .catch(err =>{
        return err;
    })
}