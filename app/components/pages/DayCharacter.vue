<template>
<ScrollView>
   <WrapLayout backgroundColor="#fff" v-if="analysis && analysis.dayCharacter &&  analysis.dayCharacter.length > 0">        
        <Label :text="analysis.dayCharacter[0].name" class="category" />
        <Label :text="analysis.dayCharacter[0].position" class="category" />
        <AbsoluteLayout backgroundColor="#fff" class="personaje-content">
            <Image
                :src="analysis.dayCharacter[0].image.url"
                top="55" class="img-personaje" />
         
                <WebView :src="analysis.dayCharacter[0].content" />
                <!-- <label
                    :text="opening.title"
                    class="titular-ppal" textWrap="true" /> -->
            
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
.personaje-content {
    margin-top: 42px;
}
.analysis-personaje {
    padding: 36px 32px 36px 32px;
}
.gray-box {
    width: 56%;
    margin-left: 22%;
    margin-top: 236px;
    height: 328px;
    border-color: #C2C2C2;
    border-width: 1 1 1 1;
}
.img-personaje {
    width: 43%;
    margin-left: 28.5%;
}
.personaje-name {
    text-align: center;
    font: normal normal normal 24px/26px Bitter;
    color: #000000;
}
.personaje-job {
    text-align: center;
    font: normal normal normal 14px/28px Montserrat;
    color: #808080;
    margin-top: 18px;
}
.personaje-description {
    font: normal normal normal 16px/24px Montserrat;
    color: #808080;
    margin-top: 50px;
}
</style>