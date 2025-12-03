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
      console.log('[Autocomplete] Attempting initialization...');
      console.log('[Autocomplete] window.google exists:', !!window.google);
      console.log('[Autocomplete] window.google.maps exists:', !!window.google?.maps);
      console.log('[Autocomplete] window.google.maps.places exists:', !!window.google?.maps?.places);

      if (typeof window !== 'undefined' && window.google?.maps?.places) {
        try {
          console.log('[Autocomplete] Initializing AutocompleteSessionToken...');
          autocompleteSessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
          console.log('[Autocomplete] Successfully initialized session token');
        } catch (error) {
          console.error('[Autocomplete] Failed to initialize session token:', error);
          // Retry after 1 second
          setTimeout(initializeSession, 1000);
        }
      } else if (typeof window !== 'undefined') {
        // Google Maps not loaded yet, retry
        console.log('[Autocomplete] Google Maps not loaded yet, retrying in 500ms...');
        setTimeout(initializeSession, 500);
      }
    };

    initializeSession();
  }, []);

  // Get predictions as user types using AutocompleteSuggestion
  useEffect(() => {
    console.log('[Autocomplete] useEffect triggered, inputValue:', inputValue, 'length:', inputValue?.length);

    if (!inputValue || inputValue.length < 2) {
      console.log('[Autocomplete] Input too short, clearing predictions');
      setPredictions([]);
      setShowPredictions(false);
      return;
    }

    console.log('[Autocomplete] Fetching predictions for input:', inputValue);

    if (!window.google?.maps?.places) {
      console.warn('[Autocomplete] Google Places not initialized yet');
      return;
    }

    const fetchPredictions = () => {
      setIsLoading(true);
      try {
        const request = {
          input: inputValue,
          sessionToken: autocompleteSessionTokenRef.current,
        };

        console.log('[Autocomplete] Sending AutocompleteService request:', request);

        const service = new window.google.maps.places.AutocompleteService();

        service.getPlacePredictions(request, (predictions: any[], status: any) => {
          console.log('[Autocomplete] Received response, status:', status, 'predictions:', predictions);

          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            console.log('[Autocomplete] Formatting predictions...');
            const formattedPredictions: PlacePrediction[] = predictions.map((prediction: any) => {
              return {
                place_id: prediction.place_id || '',
                description: prediction.description || '',
                main_text: prediction.main_text || prediction.description || '',
                secondary_text: prediction.secondary_text || '',
              };
            });
            console.log('[Autocomplete] Formatted predictions:', formattedPredictions);
            setPredictions(formattedPredictions);
            setShowPredictions(true);
          } else {
            console.warn('[Autocomplete] No predictions found, status:', status);
            setPredictions([]);
          }
          setIsLoading(false);
        });
      } catch (error) {
        console.error('[Autocomplete] Error fetching predictions:', error);
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
      console.log('[Autocomplete] Session token reset');
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
