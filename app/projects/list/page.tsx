import styles from './project.module.css'
import Link from 'next/link'

export default function ProjectsList() {
  return (
    <main>
        <h1>ProjectsList</h1>
        <ul className = {styles.ul}>
            <li>
                <Link href = '/projects/jobit'>Jobit</Link>
            </li>
            <li>
                <Link href = '/projects/carrent'>carrent</Link>
            </li>
            <li>
                <Link href = '/projects/hipnode'>hipnode</Link>
            </li>
        </ul>
    </main>
  )
}