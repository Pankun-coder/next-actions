import axios from "axios";
import useSWR from "swr";
export default function Users() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("http://rails-actions-service.my-service:80");
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <div>データなし</div>;
  } else {
    return (
      <div>
        {data.map((value, index) => {
          return (
            <div>
              {value.name}, {value.age}
            </div>
          );
        })}
      </div>
    );
  }
}
