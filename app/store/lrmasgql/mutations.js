export default {
  saveTopics(state, payload){
    state.topics=payload;
   },
   savePostsByTopic(state, payload){
    state.postsByTopic=payload;
   }
}