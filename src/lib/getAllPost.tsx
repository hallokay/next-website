export default async function getAllPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  // const res = await fetch("http://localhost:3000/api/posts", {
    //10초에 한번씩 업데이트
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    // throw new Error("데이터를 가져오는데 실패했습니다.");
    return undefined;
}

  return res.json();
}
