<template>
  <div class="card">
    <a :href="person.website" target="_blank">
      <div class="card-image">
        <figure class="image is-4by3" style="overflow: hidden">
          <img class="memberPicture" :src="person.photo" alt="Placeholder image" style="object-fit: cover">
        </figure>
      </div>
    </a>
    <div class="card-content p-4">
      <div class="media mb-2">
        <div class="media-content">
          <p class="title is-4">{{ person.title }}{{ person.displayName }}</p>
          <p class="subtitle is-6 mb-0">{{ person.cnName }}</p>
        </div>
      </div>

      <div class="content" style="overflow-wrap: break-word;">
        <p class="p-0 mb-0"
           style="font-size: 14px; line-height: 20px;"
           v-html="person.position"></p>
        <hr class="my-2">
        <p class="p-0 m-0" style="color: black; font-weight: bold">Research Interests</p>
        <p class="p-0 mb-0" style="font-size: 14px; line-height: 20px; color: black" v-html="person.interests"></p>
      </div>
    </div>
    <div class="card-footer p-4">
      <div class="content" style="overflow-wrap: break-word;">
        <template v-if="person.location !== ''">
        <span><ion-icon name="location-outline"></ion-icon> <span
            style="font-size: 14px; color: black"> {{ person.location }}</span></span>
          <br>
        </template>
        <template v-if="person.contact !== ''">
        <span><ion-icon name="mail-outline"></ion-icon> <a :href="'mailto:' + person.contact"
                                                           style="font-size: 14px; color: black">Contact Me</a></span>
          <br>
        </template>
        <template v-if="person.website !== ''">
        <span><ion-icon name="browsers-outline"></ion-icon> <a :href="person.website" target="_blank"
                                                               style="font-size: 14px; color: black">Personal Website</a></span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserCardView",
  props: ["person"]
}
</script>

<style scoped>
ion-icon {
  font-size: 16px;
  vertical-align: middle;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-footer {
  margin-top: auto;
}

span {
  vertical-align: middle;
}

a {
  vertical-align: middle;
}

.card:hover .memberPicture {
  -webkit-transform: scale(1.1);
}

.memberPicture {
  transition: transform 0.2s linear;
}

</style>