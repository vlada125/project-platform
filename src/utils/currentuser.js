import axios, { AxiosError } from 'axios';
import { server } from './setting'

export async function currentUser(token) {
 
  try{
    const response = await axios.get(`${server}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
      
    })
    return true;
  } catch(error) {
    return false;
  }
}