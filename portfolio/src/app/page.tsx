import style from './_style/page.module.css';
export default function Home(){
  return (
    <div className = {style.main}>
      <h1>Hello World!</h1>
      <div className={style.links}>
        <span>Github</span>
        <span>vlog</span>
      </div>
    </div>
  )
}