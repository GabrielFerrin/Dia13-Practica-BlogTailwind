import './App.css'
import ArticlesCtn from './components/ArticlesCtn'
import Header from './components/Header'
import MainArticle from './components/MainArticle'
import NewsContainer from './components/NewsContainer'

function App() {
  return (
    <main className='px-4 py-6'>
      <Header />
      <div className='lg:flex gap-8'>
        <MainArticle />
        <NewsContainer />
      </div>
      <ArticlesCtn />
    </main>
  )
}

export default App
