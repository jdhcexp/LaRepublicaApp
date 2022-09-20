<template>
    <StackLayout>
        <ScrollView orientation="horizontal" height="68" class="enterprise-gral" v-if="getMediaTypes">
            <GridLayout :columns="genCols">
                <label column="0" text="todos" class="menu" :class="{ active: selectedItem == 0 }" textWrap="true"
                    @tap="selectMediaType(null,0)"></label>
                <label v-for="(item, index) in mediaTypes" :key="index" :column="index + 1" :text="item.key"
                    class="menu" :class="{ active: selectedItem == index + 1 }" textWrap="true"
                    @tap="selectMediaType(item.key, index+1)"></label>


            </GridLayout>
        </ScrollView>
        <GridLayout>
            <ScrollView>
            <StackLayout backgroundColor="#fff" v-if="getBooks">
                <!-- <button @tap="showInfo">sdlkskd fksd jfnksdjfksjdk</button> -->
                <!-- <label v-for="(item, index) in books" :key="index" :text="item.cover"></label> -->
                 <Image v-for="(item, index) in books" :key="index" :src="item.cover.replace('{','%7B').replace('}','%7D')"/>
            </StackLayout>
        </ScrollView>
        </GridLayout>
    </StackLayout>
</template>

<script>

export default {
    data() {
        return {
            selectedItem: 0,
            mediaTypes: null,
            mediaTypeSelected: null,
            books: null,
        }
    },
    computed: {
        genCols() {

            let columns = 'auto ';
            this.mediaTypes.forEach(element => {
                columns = columns + 'auto '
            });
            return columns;
        },
        getMediaTypes() {
            if (this.mediaTypes == null) {
                this.mediaTypes = this.$store.getters['lrmasgql/getMediaTypes']
            }
           
            return this.mediaTypes != null

        },
        getBooks() {
            if (this.books == null) {
                this.books = this.$store.getters['lrmasgql/getBooks']
            }
           
            return this.books != null

        },
        checkState() {
            return this.$store.getters['lrmasgql/getMediaTypes'];
        },
        checkBooksState() {
            return this.$store.getters['lrmasgql/getBooks'];
        }
    },
    methods:{
       selectMediaType(mediaType,idx){
        this.selectedItem=idx;
        var req = {
            mediaType: mediaType
        }
        this.$store.dispatch('lrmasgql/loadBooks',req).then(() => {
            this.books = this.$store.getters['lrmasgql/getBooks']         
        })          
       }
    },
    watch: {
        checkState(newVal, oldVal) {
            // Our fancy notification (2).
            this.mediaTypes = this.$store.getters['lrmasgql/getMediaTypes']
        }
    },
    beforeMount() {
        this.$store.dispatch('lrmasgql/loadMediaTypes').then(() => {
            this.mediaTypes = this.$store.getters['lrmasgql/getMediaTypes']
        })
        var req = {
            mediaType: this.mediaTypeSelected
        }
        this.$store.dispatch('lrmasgql/loadBooks',req).then(() => {
            this.books = this.$store.getters['lrmasgql/getBooks']         
        })                                  
    },

}
</script>

<style scoped>
.enterprise-gral {
    margin: 0 5px;
}

.menu {
    border-color: #C2C2C2;
    border-width: 1 1 1 1;
    height: 68px;
    padding: 9px 18px;
    text-align: center;
    font-size: 11px;
    line-height: 14px;
    font-family: Montserrat;
    font-weight: 500;
    color: #808080;
    border-radius: 32px;
    margin-left: 5px;
    margin-right: 5px;
}

.active {
    color: #C51A1B;
    background-color: #EEEEEE;
    border-color: #EAEAEA;
}
</style>