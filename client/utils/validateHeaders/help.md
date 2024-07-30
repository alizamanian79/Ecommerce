 import { validateHeaders } from 'validateHeaders Path address'; 


add in api 

  if (!validateHeaders(req, res,process.env.VALID_API_KEY_USER)) {
    return;
  }