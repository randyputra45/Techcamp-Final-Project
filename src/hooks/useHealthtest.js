import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function useHealthTest() {
    const [questions, setQuestion] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
    };

    useEffect(() => {
        async function getScreening() {
            await axios.get('https://gocure.netlify.app/api/health-test', { withCredentials: true, config })
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
        questions,
        isLoading
    }
}