export default async ({ req, res, log, error }) => {
 
  if(req.method==='GET'){
    return res.send('this was a GET request');
  }
  if(req.method==='POST'){
    return res.json({
      'xyz':"helllo ji"
    })
  }

};
