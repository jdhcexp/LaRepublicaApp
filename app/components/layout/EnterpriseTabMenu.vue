<template>
<StackLayout>
<SegmentedBar v-model="selectedItem">
  <SegmentedBarItem title="Noticias" />
  <SegmentedBarItem title="Nuevo en la oficina" />
  <SegmentedBarItem title="Indicadores" />
</SegmentedBar>
<GridLayout>
  <Section v-if="selectedItem == 0" sect="5"></Section>
  <NewInOffice v-if="selectedItem == 1"></NewInOffice>
  <IndicatorsPage v-if="selectedItem == 2"></IndicatorsPage>
</GridLayout> 
</StackLayout>
</template>

<script>
 import Section from "../pages/Section";
   import NewInOffice from "../pages/NewInOffice";
    import IndicatorsPage from "../pages/IndicatorsPage";
export default {
  components: {
            Section,
            NewInOffice,
            IndicatorsPage
        },
  data() {
    return {
      selectedItem: 0,
    };
  },
};
</script>