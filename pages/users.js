import axios from "axios";
import useSWR from "swr";
export default function Users() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "http://rails-load-balancer-e0ef7ce9bd722f97.elb.ap-northeast-1.amazonaws.com/users"
  );
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
