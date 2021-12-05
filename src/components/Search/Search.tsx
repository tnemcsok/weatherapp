import React, { useEffect, useRef, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/fetchWeather";
import { fetchCities } from "./../../api/placeSuggestion";
import { useClickOutside } from "./../../hooks/useClickOutside";
import {
  LocationButton,
  LocationIcon,
  SearchElement,
  SearchIcon,
  SearchInput,
  SearchResult,
} from "./Searchstyle";
import Suggestion from "./Suggestion";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const suggestionRef = useRef(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    setShowSuggestions(true);
    fetchCities(searchTerm).then((res) => {
      setSuggestions(res);
    });
  }, [searchTerm]);

  useClickOutside(suggestionRef, () => setShowSuggestions(false));

  const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const showPosition = (position: any) => {
    console.log(position.coords.latitude);
    dispatch(
      fetchWeather({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      // Cancel the default action, if needed
      e.preventDefault();
      // Fetch data
      dispatch(
        fetchWeather({
          lat: parseFloat(suggestions[0].split(",")[2]),
          lng: parseFloat(suggestions[0].split(",")[3]),
        })
      );
      setTimeout(() => {
        setShowSuggestions(false);
      }, 400);
    }
  };

  return (
    <SearchElement>
      <SearchIcon />
      <DebounceInput
        element={SearchInput}
        debounceTimeout={300}
        onChange={onSearchInputChanged}
        onKeyDown={onKeyDown}
        placeholder="Search for location"
      />
      <LocationButton
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        }}
      >
        <LocationIcon />
      </LocationButton>

      {showSuggestions && (
        <SearchResult ref={suggestionRef}>
          {suggestions?.slice(0, 6)?.map((s, i) => (
            <Suggestion
              key={i}
              label={s}
              hideSuggestionFn={() => {
                setShowSuggestions(false);
              }}
            />
          ))}
        </SearchResult>
      )}
    </SearchElement>
  );
};

export default Search;
