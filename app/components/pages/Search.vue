<template>
    <Page class="page">
        <ActionBar backgroundColor="#fff">
            <NavigationButton text="" android.systemIcon="ic_menu_back" @tap="goBack" />
            <StackLayout orientation="horizontal" class="input-search">
                <SearchBar hint="search" @textChange="onTextChanged" v-model="searchQuery">

                </SearchBar>
            </StackLayout>
        </ActionBar>
        <StackLayout>
            <label :text="searchTerm" class="search-bar"></label>
            <!--<Label class="search-bar">
                <FormattedString>
                    <Label text="Resultados por: "></Label>
                    <Label text="Economía" class="search-word"></Label>
                </FormattedString>
            </Label>-->
            <ScrollView orientation="horizontal" height="68" class="enterprise-gral">

                <GridLayout :columns="genCols" v-if="facetsExist">
                    <label column="0" :text="allText" class="menu" :class="{ active: selectedItem == 0 }"
                        textWrap="true" @tap="selectTag(); selectedItem = 0"></label>
                    <label v-for="(item, index) in searchFacets.tags.items" :key="index" :column="index + 1"
                        :text="item.item + '(' + item.count + ')'" class="menu"
                        :class="{ active: selectedItem == index + 1 }" textWrap="true"
                        @tap="selectTag(item); selectedItem = index + 1"></label>
                    <!-- <label column="1" text="Análisis" class="menu" :class="{active: selectedItem == 1}" textWrap="true" @tap="selectedItem = 1"></label>
				<label column="2" text="Personaje del dia" class="menu" :class="{active: selectedItem == 2}" textWrap="true" @tap="selectedItem = 2"></label>
				<label column="3" text="Invitados" class="menu" :class="{active: selectedItem == 3}" textWrap="true" @tap="selectedItem = 3"></label> -->
                    <!-- <label v-for="(item, index) in tribunesFilter" :key="index" :column="index + 4" :text="item.name" class="menu" :class="{active: selectedItem == index + 4} " textWrap="true" @tap="selectedItem = index+4"></label> -->
                    <!-- <label column="5" text="Datos cocteleros" class="enterprise-menu" textWrap="true"></label>
				<label column="6" text="Mercado cambiario" class="enterprise-menu" textWrap="true"></label>
				<label column="7" text="Macro" class="enterprise-menu" textWrap="true"></label>
				<label column="8" text="Bancos" class="enterprise-menu" textWrap="true"></label> -->
                </GridLayout>
            </ScrollView>
            <ScrollView>
                <StackLayout v-if="postsExist">
                    <SearchHeadline v-for="(hl, index) in search.results" :key="index" :headLine="hl"></SearchHeadline>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../../shared/selected-page-service"
    ;
import SearchHeadline from "../modules/headlines/SearchHeadline.vue";
export default {
    // mounted() {
    //   SelectedPageService.getInstance().updateSelectedPage("Search");
    // },
    data() {
        return {
            searchQuery: null,
            search: null,
            selectedItem: 0,
            selectedTag: [],
            searchFacets: null,
            total: 0
        };
    },
    computed: {
        message() {
            return "<!-- Page content goes here -->";
        },
        allText() {
            return this.postsExist ? "Todos(" + this.total + ")" : ""
        },
        searchTerm() {
            return this.termExist ? "Resultados por: " + this.searchQuery : "";
        },
        termExist() {
            return this.searchQuery && this.searchQuery.length > 2;
        },
        facetsExist() {
            if (this.searchFacets == null) {
                this.searchFacets = this.$store.getters["lrgql/getSearchFacets"];
            }
            return this.searchFacets != null && this.searchFacets.tags && this.searchFacets.tags.items && this.searchFacets.tags.items.length > 0;
        },
        postsExist() {
            if (this.search == null) {
                this.search = this.$store.getters["lrgql/getSearchResponse"];
            }
            return this.search != null && this.search.results && this.search.results.length > 0;
        },
        genCols() {
            let cols = 1;
            if (this.facetsExist) {
                cols = cols + this.searchFacets.tags.items.length;
            }
            let columns = "";
            for (let i = 0; i < cols; i++) {
                columns = columns + "auto ";
            }
            return columns;
        },
    },
    methods: {
        onDrawerButtonTap() {
            utils.showDrawer();
        },
        onTextChanged() {
            if (this.termExist) {
                this.selectedTag = []
                var req = {
                    term: this.searchQuery,
                    tags: this.selectedTag
                };

                this.$store.dispatch("lrgql/loadSearchFacets", req).then(() => {
                    this.searchFacets = this.$store.getters["lrgql/getSearchFacets"];

                    console.log(this.searchFacets);
                });
                this.$store.dispatch("lrgql/loadSearch", req).then(() => {
                    this.search = this.$store.getters["lrgql/getSearchResponse"];

                    this.total = this.search.total
                });
            }
        },
        selectTag(item) {
            this.selectedTag = []
            if (item) {
                this.selectedTag.push(item.item)

            }
            var req = {
                term: this.searchQuery,
                tags: this.selectedTag
            };
            this.$store.dispatch("lrgql/loadSearch", req).then(() => {
                this.search = this.$store.getters["lrgql/getSearchResponse"];
                console.log("wqeqweqweqweqweqweqweqweqweqeqweq·");
                console.log(this.search);
            });

        }
    },
    components: { SearchHeadline }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '@nativescript/theme/scss/variables/blue';
// End custom common variables

// Custom styles
</style>


<style scoped>
.input-search {
    width: 78%;
    height: 94px;
    background: #FFFFFF;
    border-width: 1 1 1 1;
    border-color: #C2C2C2;
    border-radius: 52px;
    color: #000000;
    font-size: 14px;
    line-height: 25px;
    font-family: Montserrat;
    font-weight: 500;
}

.search-bar {
    background-color: #F5F4F6;
    height: 100px;
    font-size: 12px;
    line-height: 25px;
    font-family: Montserrat;
    font-weight: 500;
    color: #808080;
    padding: 17px 16px;
}

.search-word {
    font: italic normal bold 12px/25px Montserrat;
    color: #000000;
}

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
