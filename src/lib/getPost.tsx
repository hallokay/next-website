export default async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    // throw new Error("데이터를 가져오는데 실패했습니다.");
    return undefined;
  }

  return res.json();
}
