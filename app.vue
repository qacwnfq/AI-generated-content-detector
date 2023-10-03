<template>
  <div class="container">
    <h1>AI Content Detector</h1>

    <!-- Introduction -->
    <div class="satirical-intro">
      <p>Are you a teacher or professor? Are you tired of not knowing if your students are cheating?</p>
      <p>Maybe you hired a contractor to generate some content for you, and you want to know whether they really worked for all those hours they billed you.</p>
      <p>Well, fear no more, the AI-content-detector is here to save the day!</p>
      <p>Our advanced AI technology boasts a 99.9% accuracy rate, or so we hope. You're free to test the accuracy yourself, but be warned that testing your own texts might reveal that you're not human but AI.</p>
      <p>Contact our Sales team if you wnat to unlock the full power of AI detection!</p>
    </div>



    <div class="form-group">
      <label for="content">Enter Text to inspect:</label>
      <input type="text" id="content" v-model="textInput" placeholder="Enter text here...">
    </div>
    <button @click="openModal">Detect presence of AI</button>


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
      previousInput: '',
      modalVisible: false,
      detectionResult: '',
    };
  },
  methods: {
    openModal() {
      if(this.previousInput !== this.textInput) {
        const randomValue = Math.round(1000 * (Date.now() + Math.random())) 
        const isAI = randomValue % 2
        if(isAI) {
          this.detectionResult = `Detected AI in given Input!`;
        }
        else {
          this.detectionResult = `Could not detect AI. Either the input is human generated or it was made by a better AI`;
        }
      }
      this.previousInput = this.textInput
      this.modalVisible = true;
    },
    closeModal() {
      console.log('close modal')
      this.modalVisible = false;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

form {
  margin: 20px 0;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}

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
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 80%;
  text-align: center;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
.satirical-intro {
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
}
</style>
