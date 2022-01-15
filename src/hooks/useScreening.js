import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function useScreening() {
    const [questionText, setQuestion] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
    };

    useEffect(() => {
        async function getScreening() {
            await axios.get('https://gocure.netlify.app/screening', { withCredentials: true, config })
            .then(res => {
                setQuestion(res.data);
                setLoading(false);
            }).catch(err => {
                console.log(err);
                setLoading(false);
            });
        }
        
        getScreening();  
    }, []);
    
    return {
        questionText,
        isLoading
    }
}