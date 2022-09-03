
import gql from 'graphql-tag';


export const lrmasqueries = {
ME_QUERY_T: gql`
query topics{
  me{
    news {
      topics{
        id
        topicName
      }
    }
  }
}
`,
POSTS_BY_TOPIC_ID: gql`
query postByTopic($id: Int!){
    me{
      news {
        posts(tagId: 100){
            id
            header
            title
            principalImage {
                url(size: $id)
            }
            urlApp
        }
      }
    }
  }
`
}