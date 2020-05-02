<template>
  <div style="margin-left:4%; margin-top:3%">
    <div  class="p-grid">
      <span class="p-float-label">
        <InputText id="city" type="text" v-model="city" />
        <label>Cidade</label>
      </span>
      <Button style="margin-left:1%" label="Buscar" @click="searchByCity(event)" />
    </div>
    <div style="margin-top: 2%" class="p-grid">
      <span class="p-float-label">
        <InputText id="Latitude" v-model="latitude" />
        <label>Latitude</label>
      </span>
      <span style="margin-left:1%" class="p-float-label">
        <InputText id="Longitude" v-model="longitude" />
        <label>Longitude</label>
      </span>
      <Button style="margin-left:1%"  label="Buscar" @click="searchByCoordinates()" />
    </div>
    <Button style="margin-top: 2%" label="Limpar" @click="clear()"/>
    <div class="dataTable">
      <DataTable :value="tracks" :lazy="true">
        <Column field="title" header="Músicas Sugeridas" />
      </DataTable>
    </div>
  </div>
</template>

<script>
import PlaylistService from "../services/PlaylistService";

export default {
  data() {
    return {
      city: null,
      latitude: null,
      longitude: null,
      musics: null,
      tracks: [],
      playlistService: null
    };
  },
  created() {
    this.playlistService = new PlaylistService();
  },
  methods: {
    async searchByCity() {
      this.musics = await this.playlistService.getPlaylistByCity(this.city);
      this.tracks = this.musics.items.map(item => {
        return {
          title: item.track.name
        };
      });
    },

    async searchByCoordinates() {
      this.musics = await this.playlistService.getPlaylistByCoordinates(
        this.latitude,
        this.longitude
      );
      this.tracks = this.musics.items.map(item => {
        return {
          title: item.track.name
        };
      });
    },

    clear() {
      this.city = null;
      this.latitude = null;
      this.longitude = null;
      this.tracks = null;
    }
  }
};
</script>

<style scoped>
.dataTable {
  width: 80%;
  padding-top: 3%;
}
</style>
