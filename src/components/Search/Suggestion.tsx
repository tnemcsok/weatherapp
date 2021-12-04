import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/fetchWeather";
import { SuggestionItem } from "./Searchstyle";

interface ISuggestionProps {
  label: string;
  hideSuggestionFn: Function;
}

const Suggestion: React.FC<ISuggestionProps> = (props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      fetchWeather({
        lat: parseFloat(props.label.split(",")[2]),
        lng: parseFloat(props.label.split(",")[3]),
      })
    );
    setTimeout(() => {
      props.hideSuggestionFn();
    }, 400);
  };

  return (
    <SuggestionItem onClick={onClick}>
      {props.label.split(", ")[0] + ", " + props.label.split(", ")[1]}
    </SuggestionItem>
  );
};

export default Suggestion;
