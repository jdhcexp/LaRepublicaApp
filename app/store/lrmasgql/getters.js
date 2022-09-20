export default {
  getTopics(state){
    return state.topics
  },
  getTopicPosts(state){
    return state.postsByTopic
  },
  getDigitalVersions(state){
    return state.digitalVersions
  },
  getMediaTypes(state){
    return state.mediaTypes
  },
  getBooks(state){
    return state.books
  }

}