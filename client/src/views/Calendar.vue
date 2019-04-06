<template>
    <div class="calendar">
        <Calendar />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Calendar from '../components/Calendar.vue'; // @ is an alias to /src

@Component({
  components: {
    Calendar,
  },
})
export default class CalendarView extends Vue {}
</script>
