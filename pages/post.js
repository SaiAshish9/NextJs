import Layout from '../components/Layout'

import {withRouter} from 'next/router'

const Post= ({router})=>(

    <Layout title={router.query.title} >

<p>
Lorem ipsum dolor sit amet, consectetur adip
</p>

   </Layout>


)
// url.query.title url is 
export default withRouter(Post);

