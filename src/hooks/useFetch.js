import { useEffect, useState } from 'react';


export function useFetch(fetchFn, initialValue) {
	const [isFetching, setIsFetching] = useState();
	const [error, setError ] = useState();
	const [fetchedData, setFetchedData] = useState(initialValue);

	useEffect(() => {
		async function fetchData() {
		  setIsFetching(true);
		  try {
			const places = await fetchFn();
			setFetchedData(places);
		  } catch (error) {
			setError({ message: error.message || 'Failed to fetch user places.' });
		  }
	
		  setIsFetching(false);
		}
	
	  }, [fetchFn]);

	  return {
		isFetching,
		fetchedData,
		error
	  }
}