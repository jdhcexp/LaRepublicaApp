<template>
<ScrollView>
   <WrapLayout backgroundColor="#fff" v-if="analysis && analysis.dayCharacter &&  analysis.dayCharacter.length > 0">        
        <Label :text="analysis.dayCharacter[0].name" class="category" />
        <Label :text="analysis.dayCharacter[0].position" class="category" />
        <AbsoluteLayout backgroundColor="#fff">
            <Image
                :src="analysis.dayCharacter[0].image.url"
                top="55" class="img-ppal" />
            <StackLayout class="titular-box">
                <HtmlView :html="analysis.dayCharacter[0].content" />
                <!-- <label
                    :text="opening.title"
                    class="titular-ppal" textWrap="true" /> -->
            </StackLayout>
        </AbsoluteLayout>
    </WrapLayout>
    </ScrollView>
</template>

<script>
import gql from 'graphql-tag';

const DAY_CHARACTER_QUERY = gql `
query DayChar {
  analysis {
    dayCharacter {
      name
      position
      content
      image {
        alt
        mimeType
        title
        url
      }
    }
  }
}
`

export default {
    apollo:{
        analysis: DAY_CHARACTER_QUERY
    }

}
</script>

<style scoped>
.category {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
    color: #808080;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}
.titular-box {
    margin-left: 9%;
    width: 82%;
    background-color: #fff;
}
.titular-ppal {
    text-align: center;
    font-size: 22px;
    color: #000;
    font-family: 'Bitter', serif;
}
.img-ppal {
    width: 100%;
}
</style>