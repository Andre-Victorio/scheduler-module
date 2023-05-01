import {useState, useEffect, useRef, useCallback} from "react";
function RetrieveAccountById(userType, id) {
  const [accounts, setAccounts] = useState([]);
  const dataFetchedRef = useRef(false);
  const fetchAccounts = useCallback(async () => {
    var response = await fetch("/api/retrieveAccountById", {
      method: "POST",
      body: JSON.stringify({userType: userType, accountId: id}),
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


export default RetrieveAccountById