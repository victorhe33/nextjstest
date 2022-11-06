import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const article = ({article}) => {
  // const router = useRouter(); //contains any parameters in route.
  // const {id} = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getServerSideProps = async (context) => {
  console.log('inside getServerSideProps')
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await res.json();
  // console.log('article', article);


  return {
    props: {
      article
    }
  }
}

export default article;