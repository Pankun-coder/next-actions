import axios from "axios";
import useSWR from "swr";
export default function Users() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("rails-actions-service.my-service/users");
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
            <div key={value.id}>
              {value.name}, {value.age}
            </div>
          );
        })}
      </div>
    );
  }
}
