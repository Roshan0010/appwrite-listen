import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
 
  if(req.methord==='GET'){
    return res.send('this was a GET request');
  }
  if(methord==='POST'){
    return res.json({
      'xyz':"helllo ji"
    })
  }
};
