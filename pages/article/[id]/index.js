import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {server} from '../../../config'
import Meta from '../../../components/Meta'

const article = ({article}) => {
  // const router = useRouter(); //contains any parameters in route.
  // const {id} = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt}/> 
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

//FETCH FROM OUR OWN API
export const getStaticProps = async (context) => {
  console.log('inside getServerSideProps')
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  //paths: {params: {id: '1', id: '2'}}
  return {
    paths,
    fallback: false,
  }
}

//STATIC PROPS METHOD - dynamic generated paths from external API

// export const getStaticProps = async (context) => {
//   console.log('inside getServerSideProps')
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await res.json();

//   const ids = articles.map(article => article.id);
//   const paths = ids.map(id => ({params: {id: id.toString()}}))

//   //paths: {params: {id: '1', id: '2'}}
//   return {
//     paths,
//     fallback: false,
//   }
// }

// SERVER SIDE method
// export const getServerSideProps = async (context) => {
//   console.log('inside getServerSideProps')
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

export default article;