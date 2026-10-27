import { useState, useEffect } from "react";
import db from "../../data/db.json";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                    return;
                }

                // Fallback to local mock data from db.json if mock backend is not running
                if (url && url.includes('/menus/')) {
                    const id = url.split('/menus/')[1];
                    const found = db.menus.find((m) => String(m.id) === String(id));
                    if (found) {
                        setData(found);
                        setIsLoading(false);
                        setError(null);
                        return;
                    }
                } else if (url && url.includes('/menus')) {
                    setData(db.menus);
                    setIsLoading(false);
                    setError(null);
                    return;
                } else if (url && url.includes('/users/')) {
                    const email = url.split('/users/')[1];
                    const found = db.users.find((u) => u.email === email);
                    if (found) {
                        setData(found);
                        setIsLoading(false);
                        setError(null);
                        return;
                    }
                }

                setIsLoading(false);
                setError(err.message);
            });
   
        return () => abortCont.abort();
    }, [url]); 

    return { data, isLoading, error };
};

export default useFetch;