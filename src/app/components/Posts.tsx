import Link from 'next/link'

export default function Posts() {
  return (
    <>
      <h1>Posts:</h1>
      <ul>
        <li><Link href="/post/1">Post 1</Link></li>
        <li><Link href="/post/2">Post 2</Link></li>
        <li><Link href="/post/3">Post 3</Link></li>
        <li><Link href="/post/4">Post 4</Link></li>
      </ul>
    </>
  )
}