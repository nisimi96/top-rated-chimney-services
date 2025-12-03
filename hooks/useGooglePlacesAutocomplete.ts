import { useEffect, useRef, useState } from 'react';

interface PlacePrediction {
  place_id: string;
  description: string;
  main_text: string;
  secondary_text?: string;
}

interface UseGooglePlacesAutocompleteProps {
  inputValue: string;
  onPlaceSelect: (address: string) => void;
}

declare global {
  interface Window {
    google: any;
  }
}

export const useGooglePlacesAutocomplete = ({
  inputValue,
  onPlaceSelect,
}: UseGooglePlacesAutocompleteProps) => {
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPredictions, setShowPredictions] = useState(false);
  const autocompleteSessionTokenRef = useRef<any>(null);

  // Initialize the autocomplete session token with retry logic
  useEffect(() => {
    const initializeSession = () => {
      if (typeof window !== 'undefined' && window.google?.maps?.places) {
        try {
          autocompleteSessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
        } catch (error) {
          // Retry after 1 second
          setTimeout(initializeSession, 1000);
        }
      } else if (typeof window !== 'undefined') {
        // Google Maps not loaded yet, retry
        setTimeout(initializeSession, 500);
      }
    };

    initializeSession();
  }, []);

  // Get predictions as user types using AutocompleteService
  useEffect(() => {
    if (!inputValue || inputValue.length < 2) {
      setPredictions([]);
      setShowPredictions(false);
      return;
    }

    if (!window.google?.maps?.places) {
      return;
    }

    const fetchPredictions = () => {
      setIsLoading(true);
      try {
        // Default bounds for Marietta, GA area
        const defaultBounds = new window.google.maps.LatLngBounds(
          new window.google.maps.LatLng(33.9410, -84.3680), // Southwest
          new window.google.maps.LatLng(33.9710, -84.3280)   // Northeast
        );

        const request = {
          input: inputValue,
          bounds: defaultBounds,
          componentRestrictions: { country: 'us' },
          sessionToken: autocompleteSessionTokenRef.current,
        };

        const service = new window.google.maps.places.AutocompleteService();

        service.getPlacePredictions(request, (predictions: any[], status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            const formattedPredictions: PlacePrediction[] = predictions.map((prediction: any) => {
              return {
                place_id: prediction.place_id || '',
                description: prediction.description || '',
                main_text: prediction.main_text || prediction.description || '',
                secondary_text: prediction.secondary_text || '',
              };
            });
            setPredictions(formattedPredictions);
            setShowPredictions(true);
          } else {
            setPredictions([]);
          }
          setIsLoading(false);
        });
      } catch (error) {
        setPredictions([]);
        setIsLoading(false);
      }
    };

    fetchPredictions();
  }, [inputValue]);

  const selectPlace = (placeId: string, description: string) => {
    onPlaceSelect(description);
    setPredictions([]);
    setShowPredictions(false);
    // Reset session token for next search
    if (window.google?.maps?.places) {
      autocompleteSessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
    }
  };

  return {
    predictions,
    isLoading,
    showPredictions,
    setShowPredictions,
    selectPlace,
  };
};
