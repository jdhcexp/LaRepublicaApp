<template>
<ScrollView>
    <!-- <button @tap="showInfo">qwertyui</button> -->
    <WrapLayout backgroundColor="#fff" v-if="newInTheOffice && newInTheOffice.length > 0">
        <NewInOfficeHeadline v-for="item in newInTheOffice" :key="item.id" :headLine="item"></NewInOfficeHeadline>
    </WrapLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';

import NewInOfficeHeadline from "../modules/headlines/NewInOfficeHeadline";

const NEW_IN_OFFICE = gql `
query NewInTheOffice {
  newInTheOffice {
    id
    name 
    image {
      url
    }
    company
    position
    startWorkDate
  }
}
`;

export default {
    components: {
        NewInOfficeHeadline
    },
    apollo: {
        newInTheOffice: NEW_IN_OFFICE
    },
    data() {
        return {};
    },
     methods: {
        showInfo() {
            debugger;
            console.log(this.newInTheOffice);
            debugger;
        }
    },
};
</script>

<style scoped>

</style>
