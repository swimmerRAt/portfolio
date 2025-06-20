import style from './_style/page.module.css';
import './_style/global.css'

export default function Home() {
  return (
    <div className={style.main}>
      <header className={style.header}>
        <nav className={style.links}>
          <a href="https://github.com/swimmerRat" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://suuuuwimmer.tistory.com/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </nav>
      </header>
      {/* 나머지 페이지 내용 */}
    </div>
  )
}
