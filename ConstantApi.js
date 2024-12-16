import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export const useCountryStateDistrict = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch countries on initial render
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://api1.he.nic.in/aishemasterservice/api/country');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          // Ensure each country has an ID
          setCountries(
            data.map((country, index) => ({
              id: country.id || index, // Fallback to index if `id` is missing
              name: country.name || 'Unknown',
            }))
          );
        } else {
          console.error('Unexpected countries data format:', data);
          Alert.alert('Error', 'Invalid country data received.');
          setCountries([]);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
        Alert.alert('Error', 'Failed to load countries.');
      }
    };

    fetchCountries();
  }, []);

  // Fetch states when a country is selected
  const fetchStates = async (countryId) => {
    if (!countryId) {
      setStates([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api1.he.nic.in/aishemasterservice/api/state?country=${countryId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (Array.isArray(data)) {
        setStates(
          data.map((state, index) => ({
            id: state.id || index, // Fallback to index if `id` is missing
            name: state.name || 'Unknown',
          }))
        );
      } else {
        console.error('Unexpected states data format:', data);
        setStates([]);
      }
    } catch (error) {
      console.error('Error fetching states:', error);
      Alert.alert('Error', 'Failed to load states.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch districts when a state is selected
  const fetchDistricts = async (stateId) => {
    if (!stateId) {
      setDistricts([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api1.he.nic.in/aishemasterservice/api/district/${stateId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (Array.isArray(data)) {
        setDistricts(
          data.map((district, index) => ({
            id: district.id || index, // Fallback to index if `id` is missing
            name: district.name || 'Unknown',
          }))
        );
      } else {
        console.error('Unexpected districts data format:', data);
        setDistricts([]);
      }
    } catch (error) {
      console.error('Error fetching districts:', error);
      Alert.alert('Error', 'Failed to load districts.');
    }
  };

  return {
    countries,
    states,
    districts,
    loading,
    fetchStates,
    fetchDistricts,
  };
};
