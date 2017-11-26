import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout isServer={props.isServer}>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image ? props.show.image.medium : ''}/>
    </Layout>
)

Post.getInitialProps = async ({query, req}) => {
  const { id } = query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { 
      show,
      isServer: !!req      
    }
}

export default Post