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
      console.log('[Autocomplete] Attempting initialization...');
      console.log('[Autocomplete] window.google exists:', !!window.google);
      console.log('[Autocomplete] window.google.maps exists:', !!window.google?.maps);
      console.log('[Autocomplete] window.google.maps.places exists:', !!window.google?.maps?.places);

      if (typeof window !== 'undefined' && window.google?.maps?.places) {
        try {
          console.log('[Autocomplete] Initializing AutocompleteService...');
          autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
          sessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
          console.log('[Autocomplete] Successfully initialized AutocompleteService and session token');
        } catch (error) {
          console.error('[Autocomplete] Failed to initialize autocomplete service:', error);
          // Retry after 1 second
          setTimeout(initializeAutocomplete, 1000);
        }
      } else if (typeof window !== 'undefined') {
        // Google Maps not loaded yet, retry
        console.log('[Autocomplete] Google Maps not loaded yet, retrying in 500ms...');
        setTimeout(initializeAutocomplete, 500);
      }
    };

    initializeAutocomplete();
  }, []);

  // Get predictions as user types
  useEffect(() => {
    if (!inputValue || inputValue.length < 2) {
      console.log('[Autocomplete] Input too short, clearing predictions');
      setPredictions([]);
      setShowPredictions(false);
      return;
    }

    console.log('[Autocomplete] Fetching predictions for input:', inputValue);
    console.log('[Autocomplete] Service initialized:', !!autocompleteServiceRef.current);

    if (!autocompleteServiceRef.current) {
      console.warn('[Autocomplete] Autocomplete service not initialized yet');
      return;
    }

    setIsLoading(true);
    const request = {
      input: inputValue,
      componentRestrictions: {
        country: 'us',
      },
      sessionToken: sessionTokenRef.current,
    };

    console.log('[Autocomplete] Sending request:', request);

    try {
      autocompleteServiceRef.current.getPlacePredictions(request, (predictions: any[], status: string) => {
        console.log('[Autocomplete] Received callback with status:', status);
        console.log('[Autocomplete] Predictions received:', predictions);
        console.log('[Autocomplete] PlacesServiceStatus.OK value:', window.google?.maps?.places?.PlacesServiceStatus?.OK);

        if (status === window.google?.maps?.places?.PlacesServiceStatus?.OK && predictions) {
          console.log('[Autocomplete] Status OK, formatting predictions...');
          const formattedPredictions: PlacePrediction[] = predictions.map((p) => ({
            place_id: p.place_id,
            description: p.description,
            main_text: p.main_text,
            secondary_text: p.secondary_text,
          }));
          console.log('[Autocomplete] Formatted predictions:', formattedPredictions);
          setPredictions(formattedPredictions);
          setShowPredictions(true);
        } else {
          console.warn('[Autocomplete] No predictions found or status error. Status:', status, 'Predictions:', predictions);
          setPredictions([]);
        }
        setIsLoading(false);
      });
    } catch (error) {
      console.error('[Autocomplete] Error getting predictions:', error);
      setPredictions([]);
      setIsLoading(false);
    }
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
