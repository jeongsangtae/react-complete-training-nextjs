import { useRouter } from "next/router";

// my-domain.com/news/something-important

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
