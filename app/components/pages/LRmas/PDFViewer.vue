<template>
    <page>
        <ActionBar>
            <Label text="Version Digital"></Label>
        </ActionBar>
        <!-- <GridLayout>
            <button @tap="showinfo">sdlkfmsklflsk mflsdm fldsk</button>
    </GridLayout> -->
    
        <!-- <ScrollView v-if="uri"> -->
        <WebView :src="uri" />
        <!-- </ScrollView> -->
    </page>
  
</template>

<script>
    export default {
        props:["uri"],
        methods: {
            showinfo(){                
                console.log(this.uri);
            }
        },
    }
</script>