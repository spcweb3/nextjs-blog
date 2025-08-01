export default async function Post({ params }: { params: { postId: string } }) {
  const awaitedParams = await params;
  return (
    <>
      <h1>This is post {awaitedParams.postId}</h1>
    </>
  );
}
