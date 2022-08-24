<template>
   <StackLayout orientation="horizontal" class="content-new-office">
        <Image :src="headLine.image.url" class="thumbnail-new"/>
        <StackLayout>
            <Label :text="headLine.name" class="name-new" textWrap="true" />
            <Label class="company-job">
                <FormattedString>
                    <Span :text="headLine.company+' - '">
                    </Span>
                    <Span :text="headLine.position" class="job">
                    </Span>
                </FormattedString>
            </Label>

            <!--TODO <label text="Fecha de ingreso: noviembre 16 de 2021" textWrap="true" class="company-date" /> -->
        </StackLayout>
    </StackLayout>
</template>

<script>
export default {
props: {
        headLine: {
            type: Object
        }
    },
}
</script>


<style scoped>
.content-new-office {
    margin-left: 15px;
    margin-right: 15px;
    border-color: #C2C2C2;
    border-width: 0 0 1 0;
    margin-top: 41px;
    padding-bottom: 20px;
    clear: both;
}
.name-new {
    margin-top: 13px;
    font: normal normal normal 19px/23px Bitter;
    letter-spacing: 0px;
    color: #000000;
}
.company-job {
    font: normal normal bold 12px/25px Montserrat;
    color: #808080;
}
.job {
    font: normal normal normal 12px/25px Montserrat;
    color: #808080;
}
.company-date {
    font: normal normal normal 10px/25px Montserrat;
    color: #808080;
    margin-top: 13px;
}
.thumbnail-new {
    width: 28%;
    margin-right: 16px;
    vertical-align: top;
    border-radius: 180px;
}

</style>