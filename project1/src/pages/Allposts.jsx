import React from 'react'
import { Container, Postcard } from '../components'
import service from "../appwrite/configuration";


function Allposts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    service.getPost([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default Allposts