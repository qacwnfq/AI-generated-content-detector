<template>
  <div class="container">
    <h1>AI Content Detector</h1>
    <form @submit.prevent="openModal">
      <div class="form-group">
        <label for="content">Enter Text to Detect:</label>
        <input type="text" id="content" v-model="textInput" placeholder="Enter text here...">
      </div>
      <button type="submit">Detect</button>
    </form>

    <!-- Modal -->
    <div class="modal" v-if="modalVisible">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Detection Result</h2>
        <p>{{ detectionResult }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: '',
      modalVisible: false,
      detectionResult: '',
    };
  },
  methods: {
    openModal() {
      // Replace this with your actual AI detection logic
      // For this prototype, we'll simulate the result
      const isAI = (Date.now() + Math.random()) % 2 == 0
      if(isAI) {
        this.detectionResult = `Detected: ${this.textInput}`;
        this.modalVisible = true;
      }
      else {
        this.detectionResult = `Could not detect AI. Either the input is human generated or it was made by a better AI: ${this.textInput}`;
        this.modalVisible = true;
      }
    },
    closeModal() {
      this.modalVisible = false;
    },
  },
};
</script>

<style scoped>
/* ... Previous CSS styles ... */

/* Modal styles */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  max-width: 80%;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
