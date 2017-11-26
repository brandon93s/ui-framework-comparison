import Layout from '../components/MyLayout.js'

const About = (props) => (
    <Layout isServer={props.isServer}>
       <p>This is the about page</p>
    </Layout>
)

About.getInitialProps = async ({ req }) => {
    return {
        isServer: !!req
    }
}

export default About