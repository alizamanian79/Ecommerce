  const [cookieValue, setCookieValue] = useState<string | undefined>(undefined);



  
initial State
setCookie('myCookie', 'cookieValue', { maxAge: 3600 });



get cookie
const value = getCookie('myCookie');
setCookieValue(value);


remove
removeCookie('myCookie');
setCookieValue(undefined);