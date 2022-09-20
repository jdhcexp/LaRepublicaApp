
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
`,
DIGITAL_VERSION: gql`
query digital{
  digitalVersion {
    items {
      id
      cover
      path
    }
  }
}
`,
BOOKS_MEDIATYPES: gql`
query mediaTypes{
  books {
    mediaTypes{
      key
      slug
      count
    }
  }
}
`,
BOOKS: gql`
query books($mediaType: String){
  books{
    search(mediaType: $mediaType){
      id
      items{
        thumbnail
        cover
        isInternal
      }
      total
    }  
  }
}
`
}