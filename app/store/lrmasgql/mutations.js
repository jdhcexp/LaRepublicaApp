export default {
  saveTopics(state, payload){
    state.topics=payload;
   },
   savePostsByTopic(state, payload){
    state.postsByTopic=payload;
   },
   saveDigitalVersions(state, payload){
    state.digitalVersions=payload;
   },
   saveMediaTypes(state, payload){
    state.mediaTypes=payload
   },
   saveBooks(state, payload){
    state.books=payload
   }
}