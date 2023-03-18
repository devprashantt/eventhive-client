import { useState, useEffect } from "react";
import { DataContext, dataInitialState } from "./DataContext";
import { fetchData } from "../utils";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dataInitialState);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
