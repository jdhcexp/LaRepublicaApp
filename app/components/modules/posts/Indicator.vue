<template>
    
        <RadCartesianChart>
            <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
            <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
            <LineSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount"></LineSeries>
        </RadCartesianChart>
    
</template>

<script>
export default {
    prop:['indId','type'],
    data() {
        return {
            title: "description",
            items: [
                {Country:"1",Amount:10},
                {Country:"2",Amount:13},
                {Country:"3",Amount:14},
                {Country:"4",Amount:16},
                {Country:"5",Amount:12},
                {Country:"6",Amount:18},

            ]
        };
    },
    methods: {
    onNavigationButtonTap() {
    //   Frame.topmost().goBack();
    }
   
  },
}
</script>