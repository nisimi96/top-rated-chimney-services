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
  const autocompleteServiceRef = useRef<any>(null);
  const sessionTokenRef = useRef<any>(null);

  // Initialize the autocomplete service with retry logic
  useEffect(() => {
    const initializeAutocomplete = () => {
      if (typeof window !== 'undefined' && window.google?.maps?.places) {
        try {
          autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
          sessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
        } catch (error) {
          console.error('Failed to initialize autocomplete service:', error);
          // Retry after 1 second
          setTimeout(initializeAutocomplete, 1000);
        }
      } else if (typeof window !== 'undefined') {
        // Google Maps not loaded yet, retry
        setTimeout(initializeAutocomplete, 500);
      }
    };

    initializeAutocomplete();
  }, []);

  // Get predictions as user types
  useEffect(() => {
    if (!inputValue || inputValue.length < 2) {
      setPredictions([]);
      setShowPredictions(false);
      return;
    }

    if (!autocompleteServiceRef.current) return;

    setIsLoading(true);
    const request = {
      input: inputValue,
      componentRestrictions: {
        country: 'us',
      },
      sessionToken: sessionTokenRef.current,
    };

    autocompleteServiceRef.current.getPlacePredictions(request, (predictions: any[], status: string) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
        const formattedPredictions: PlacePrediction[] = predictions.map((p) => ({
          place_id: p.place_id,
          description: p.description,
          main_text: p.main_text,
          secondary_text: p.secondary_text,
        }));
        setPredictions(formattedPredictions);
        setShowPredictions(true);
      } else {
        setPredictions([]);
      }
      setIsLoading(false);
    });
  }, [inputValue]);

  const selectPlace = (placeId: string, description: string) => {
    onPlaceSelect(description);
    setPredictions([]);
    setShowPredictions(false);
    // Reset session token for next search
    if (window.google?.maps?.places) {
      sessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
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
