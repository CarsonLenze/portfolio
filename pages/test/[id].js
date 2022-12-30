import { useRouter } from 'next/router'

export default function page() {
const router = useRouter()
  const { id } = router.query

  return (
    <div>{id}</div>
  )
}