import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList';

export default function Home({articles}) {
  console.log(articles);
  // console.log('articleElements', articleElements);
  return (  
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web
        development, programming' />
      </Head>
      <h1>Welcome to Next!</h1>
      {console.log('articles', articles)}
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }

}
