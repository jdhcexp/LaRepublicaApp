<template>
    <ScrollView>
        <WrapLayout>
            <AbsoluteLayout backgroundColor="#fff" class="personaje-content">
                <label text="" class="gray-box" textWrap="true" />
                <Image
                    src="https://www.elcolombiano.com/documents/10157/0/375x562/0c0/0d0/none/11101/JNHN/image_content_35531615_20200409191544.jpg"
                    class="img-personaje" />
            </AbsoluteLayout>
            <StackLayout class="analysis-personaje">
                <Label text="Andrés Felipe Gómez" textWrap="true"
                    class="personaje-name" />
                <Label text="Presidente del Grupo Familia"
                    class="personaje-job" />
                <Label
                    text="La Asamblea General de Accionistas de Productos Familia S.A., del grupo económico liderado por Andrés Felipe Gómez, aprobó la cancelación de la inscripción de las acciones en el Registro Nacional de Valores y la Bolsa de Valores de Colombia (BVC)."
                    class="personaje-description" textWrap="true" />
            </StackLayout>
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
    margin-top: 37px;
}
.analysis-personaje {
    padding: 32px 28px 32px 28px;
}
.gray-box {
    width: 56%;
    margin-left: 22%;
    margin-top: 212px;
    height: 295px;
    border-color: #C2C2C2;
    border-width: 1 1 1 1;
}
.img-personaje {
    width: 43%;
    margin-left: 28.5%;
}
.personaje-name {
    text-align: center;
    font: normal normal normal 21px/23px Bitter;
    color: #000000;
}
.personaje-job {
    text-align: center;
    font: normal normal normal 12px/25px Montserrat;
    color: #808080;
    margin-top: 16px;
}
.personaje-description {
    font: normal normal normal 14px/21px Montserrat;
    color: #808080;
    margin-top: 44px;
}
</style>