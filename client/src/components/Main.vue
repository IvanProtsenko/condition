<template>
        <v-container id="back">
            <center>Вентилятор</center>
            <form ref="vform">
                <v-text-field
                    v-model="power"
                    v-on:change="changeRoute"
                    label="Мощность, кВт"
                    required
                ></v-text-field>
                <p>Управление: {{control || ''}}</p>
                <v-radio-group
                    v-model="control"
                    :mandatory="false"
                    v-on:change="changeRoute"
                >
                    <v-radio
                        label="Прямой пуск"
                        value="Прямой пуск"
                    ></v-radio>
                    <v-radio
                        label="Преобразователь частоты"
                        value="Преобразователь частоты"
                    ></v-radio>
                </v-radio-group>
                <center>Общие</center>
                <p>Корпус: {{corpus || ''}}</p>
                <v-radio-group
                    v-on:change="changeRoute"
                    v-model="corpus"
                    :mandatory="false"
                >
                    <v-radio
                        label="Пластик"
                        value="Пластик"
                    ></v-radio>
                    <v-radio
                        label="Металл"
                        value="Металл"
                    ></v-radio>
                </v-radio-group>
                <p>Доп. опции:</p>
                <v-checkbox
                    v-model="signal"
                    v-on:change="changeRoute"
                    label="Сигнал пожар"
                ></v-checkbox>
                <v-checkbox
                    v-model="LED_indication"
                    v-on:change="changeRoute"
                    label="LED-индикация"
                ></v-checkbox>
                <v-checkbox
                    v-model="dispetcher"
                    v-on:change="changeRoute"
                    label="Диспетчирезация"
                ></v-checkbox>
            </form>
            <v-btn block large color="primary" @click="sendConfig">Вычислить</v-btn>
        </v-container>
</template>

<script>
  export default {
    data: () => ({
        power: null,
        control: null,
        corpus: null,
        signal: false,
        LED_indication: false,
        dispetcher: false,
        form: null
    }),
    methods: {
        changeRoute() {
            this.form = {
                power: this.power,
                control: this.control,
                corpus: this.corpus,
                options: {
                    signal: this.signal, 
                    led: this.LED_indication, 
                    dispetcher: this.dispetcher
                }
            }
            console.log(this.form);
        },
        async sendConfig() {
            let result = await this.$store.dispatch('SEND_CONFIG', {
                form: this.form
            })
            console.log(result);
        }
    }
  }
</script>