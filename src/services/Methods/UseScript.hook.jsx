import { useEffect } from 'react';

const useScript = (data, callback) => {

    useEffect(() => {
        const script = document.createElement('script');
        const head = document.querySelector('head');
        if (data) {
            script.async = true;
            script.append(`
                function onSucessFunciton(res){
                    if(res?.token){
                        localStorage.setItem('order_token',res?.token) 
                    }else{
                        localStorage.setItem('preAuthOrderId',String(res?.preAuthOrderId)) 
                    }
                }  
                function onErrorFunction(res){
                    localStorage.setItem('error-payment','somthing went wrong') 
                }    
            `);
            script.append(data);
            script.type = "text/javascript";
            head.appendChild(script);
            return () => {
                head.removeChild(script);
            }
        }
    }, [data]);
};

export default useScript;