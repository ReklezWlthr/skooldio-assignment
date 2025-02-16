export const facultyFetcher = () => {
  const json = fetch(
    "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
  ).then((res) => res.json());
  return json;
};
