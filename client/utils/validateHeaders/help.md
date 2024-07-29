 import { validateHeaders } from 'validateHeaders Path address'; 


add in api 

  if (!validateHeaders(req, res)) {
    return;
  }