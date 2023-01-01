import { useCallback } from "react";

const useHttp = () => {

    const getRequest = useCallback(async (requestConfig, applyData) => {
        const response = await fetch(requestConfig.url);
        if (!response.ok) {
            throw new Error('request Failed!');
        }
        const data = await response.json();
        applyData(data);
    }, []);

    return { getRequest };
};

export default useHttp;