export default function Ssr(data) {
  console.log(data);
  return <div>aaa</div>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("rails-actions-service.my-service/users");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
