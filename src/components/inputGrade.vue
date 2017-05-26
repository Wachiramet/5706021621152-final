<template>
  <div>
    <div v-for="(dat, id) in data" class="block">
      เทอมที่ {{id + 1}}
      <div v-for="(dataTerm, index) in dat">
        วิชา: <input type="text" v-model:value="dataTerm.subject">
        หน่วยกิต: <input type="number" v-model:value="dataTerm.credit">
        เกรด: 
        <select v-model:value="dataTerm.grade">
          <option value="A">A</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
        <button v-show="dat.length === (index + 1)" @click="addDataTerm(id)" class="button">เพิ่มวิชา</button>
      </div>
      เกรด {{ calculateGradeTerm(id) }}
      <hr>
    </div>
    <button @click="addData()" class="button">เพิ่มเทอม</button>
    <hr>
    <div>
      เกรดรวม: {{ calGradeTotal() }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    ...mapActions(['addData', 'addDataTerm']),
    calculateGradeTerm (index) {
      var score = 0
      var credit = 0

      for (var i = 0; i < this.data[index].length; i++) {
        credit += Number(this.data[index][i].credit)
        if (this.data[index][i].grade === 'A' || this.data[index][i].grade === 'a') {
          score += 4 * Number(this.data[index][i].credit)
        } else if (this.data[index][i].grade === 'B+' || this.data[index][i].grade === 'b+') {
          score += 3.5 * Number(this.data[index][i].credit)
        } else if (this.data[index][i].grade === 'B' || this.data[index][i].grade === 'B') {
          score += 3 * Number(this.data[index][i].credit)
        } else if (this.data[index][i].grade === 'C+' || this.data[index][i].grade === 'c+') {
          score += 2.5 * Number(this.data[index][i].credit)
        } else if (this.data[index][i].grade === 'C' || this.data[index][i].grade === 'c') {
          score += 2 * Number(this.data[index][i].credit)
        } else if (this.data[index][i].grade === 'D+' || this.data[index][i].grade === 'd+') {
          score += 1.5 * Number(this.data[index][i].credit)
        } else if (this.data[index][i].grade === 'D' || this.data[index][i].grade === 'd') {
          score += 1 * Number(this.data[index][i].credit)
        }
      }

      if (isNaN(score / credit)) return 0
      return score / credit
    },
    calGradeTotal () {
      var gradeTotal = 0
      var i = 0
      for (; i < this.data.length; i++) {
        gradeTotal += this.calculateGradeTerm(i)
      }
      return gradeTotal / i
    }
  }
}
</script>
