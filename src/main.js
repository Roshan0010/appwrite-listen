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
