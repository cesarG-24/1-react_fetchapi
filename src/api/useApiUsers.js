import {useEffect, useState} from "react";

export const useApiUsers = () => {
    const [usersDta, setUsersDta] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://dummyjson.com/users');
            const json = await res.json();
            const data = json.users;

            // console.log(data);

            setUsersDta(data);
        }
        fetchData();

    },[setUsersDta])



    return {
      usersDta
    }
}