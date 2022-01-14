import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function usePackage() {
    const [packageData, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
    };

    useEffect(() => {
        async function getPackage() {
            await axios.get('/package', { withCredentials: true, config })
            .then(res => {
                setData(res.data);
                setLoading(false);
            }).catch(err => {
                console.log(err);
                setLoading(false);
            });
        }
        
        getPackage();  
    }, []);
    
    return {
        packageData,
        isLoading
    }
}