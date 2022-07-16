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
    margin-left: 17px;
    margin-right: 17px;
    border-color: #C2C2C2;
    border-width: 0 0 1 0;
    margin-top: 46px;
    padding-bottom: 23px;
    clear: both;
}
.name-new {
    margin-top: 15px;
    font: normal normal normal 22px/26px Bitter;
    letter-spacing: 0px;
    color: #000000;
}
.company-job {
    font: normal normal bold 14px/28px Montserrat;
    color: #808080;
}
.job {
    font: normal normal normal 14px/28px Montserrat;
    color: #808080;
}
.company-date {
    font: normal normal normal 12px/28px Montserrat;
    color: #808080;
    margin-top: 15px;
}
.thumbnail-new {
    width: 28%;
    margin-right: 18px;
    vertical-align: top;
    border-radius: 180px;
}

</style>