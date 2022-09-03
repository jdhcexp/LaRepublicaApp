
import gql from 'graphql-tag';


export const lrmasqueries = {
ME_QUERY_T: gql`
query topics{
  me{
    news {
      topics{
        id
        topicName
        topicId
      }
    }
  }
}
`,
POSTS_BY_TOPIC_ID: gql`
query postByTopic($id: Int!){
    me{
      news {
        posts(tagId: $id){
            id
            header
            title
            principalImage {
                url(size: 240)
            }
            urlApp
        }
      }
    }
  }
`
}