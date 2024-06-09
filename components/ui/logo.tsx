import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
 
     <img src="favicon.svg" alt="Logo" />

    </Link>
  )
}
