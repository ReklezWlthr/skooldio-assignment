import { useEffect, useState } from "react";
import { ScoreCard } from "./scoreCard";
import { facultyFetcher } from "../api/fetcher";

export const CardList = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    facultyFetcher().then((data) => setFaculty(data));
  }, []);

  return faculty.map((f) => <ScoreCard data={f} />);
};
