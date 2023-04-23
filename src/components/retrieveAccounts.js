import {useState, useEffect, useRef, useCallback} from "react";
function RetrieveAccounts(userType) {
  const [accounts, setAccounts] = useState([]);
  const dataFetchedRef = useRef(false);
  const fetchAccounts = useCallback(async () => {
    var response = await fetch("/api/retrieveAccounts", {
      method: "POST",
      body: JSON.stringify({userType: userType}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    setAccounts(data["data"]);
    console.log(data);
  }, [userType]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchAccounts();
  }, [fetchAccounts]);
  return accounts;
}


export default RetrieveAccounts