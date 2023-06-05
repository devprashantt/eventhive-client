import { useState, useEffect } from "react";
import { DataContext, dataInitialState } from "./DataContext";
import { fetchData } from "../utils";
import { Spinner } from "../components";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dataInitialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (isLoading) {
      getData();
    }
  }, [isLoading]);

  return (
    <DataContext.Provider value={data}>
      {isLoading ? <Spinner /> : children}
    </DataContext.Provider>
  );
};
