<template>
  <ScrollView v-if="post">

    <WebView :src="post.content" />

   </ScrollView>

</template>

<script>
import gql from 'graphql-tag';

const POST_QUERY = gql `
query Post{
  post(id: 3128077) {
    section {
      id
      name
    }
    header
    title
    create
    author{
      id
      name
      photo {
        alt
        url
      }
    }
    content(platform: APP)
    attachments{
      title
      url
    }
    relatedPosts{
      title
      id
      urlApp
    }
  }
}
`
export default {
apollo:{
    post: POST_QUERY
},
methods: {
  testmethod() {

    inittest();
  }
},
}

function inittest(){

let initElement = "<div><span>text</span>Text2</div>";
let json = mapDOM(initElement, true);

}

function mapDOM(element, json) {
    var treeObject = {};

    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
              parser = new DOMParser();
              docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element);
        }
        element = docNode.firstChild;
    }

    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        object["type"] = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }
    treeHTML(element, treeObject);

    return (json) ? JSON.stringify(treeObject) : treeObject;
}
</script>

<style>

</style>
