
import Link from 'next/link'

import Layout from '../components/Layout'

const index = () => {
    return (
        <div>
<Layout title="Home" >


           <h1>
           home 
           </h1>

<Link href="/about" >

<h1>
About
</h1>

</Link>
</Layout>

        </div>
    )
}

// dev:nest -p 4000

export default index
