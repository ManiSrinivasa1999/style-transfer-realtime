<template>
  <v-container>
    <v-row>
      <v-col
        cols="6"
      >
        <video
          ref="video"
          controls
          width="100%"
          @timeupdate="update()"
        >
          <source src="/workout.mp4"
            type="video/mp4">
        </video>
      </v-col>
      <v-col
        cols="6"
      >
        <v-img
          :src="image"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  image = '';

  update() {
    this.$nextTick();
    const video = this.$refs.video as HTMLVideoElement;
    const canvas = document.createElement('canvas') as any;
    // scale the canvas accordingly
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    // draw the video at that frame
    canvas.getContext('2d')
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    // convert it to a usable data URL
    const dataURL = canvas.toDataURL();
    video.pause();
    axios.post('http://localhost:8085/detect-image/', {
      image: dataURL,
    })
      .then((res) => {
        this.image = res.data;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
