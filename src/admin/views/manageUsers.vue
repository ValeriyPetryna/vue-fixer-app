<template>
  <div class="views">
    <aside-component :active="active" />
    <section class="content">
      <header-component />
      <main class="page">
        <div class="chat">
          <div class="chat__search-form">
            <input class="chat__search-form__input" type="text" placeholder="Search message..." />
          </div>
          <div class="chat__messages">
            <time>
              <div class="chat__messages__date">Today, 20.06.2019</div>
            </time>
            <div class="message-box" v-for="(m, index) of messages" :key="index">
              <div class="chat-message right">
                <div class="chat-message__avatar">
                  <img :src="userData.user.photo" />
                </div>
                <div class="chats__row">
                  <div class="chat-message__text">
                    {{ m.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat__send-form">
            <input class="chat__send-form__input" type="text" v-model="message" placeholder="Write a message..." />
            <div class="chat__send-form__tools">
              <a class="chat__send-form__emoji" href="#"><img src="@/assets/smile.svg"/></a><a class="chat__send-form__file"><img src="@/assets/sendfile.svg"/></a
              ><a class="chat__send-form__send-button" @click="sendMessage"><img src="@/assets/send.svg"/></a>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>


<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';
import io from 'socket.io-client';

export default {
  name: 'Search',
  components: { asideComponent, headerComponent },
  data() {
    return {
      socket: null,
      active: {},
      message: '',
      messages: [],
      userData: JSON.parse(localStorage.getItem('user')),
    };
  },
  mounted() {
    let socket = io('http://localhost:3000/');
    this.socket = socket;
    socket.on('message', this.onMessage);
  },
  methods: {
    onMessage(msg) {
      this.messages.push({ text: msg, user: this.userData.user.name });
    },
    sendMessage() {
      this.socket.emit('message', this.message, this.userData.user.name);
    },
  },
};
</script>

<style scoped lang="css">
.views {
  margin: 0;
  display: flex;
}

.page {
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(153, 163, 174, 0.06);
  border-radius: 4px;
  margin: 62px 124px 0px 142px;
  height: 72vh;
  padding: 41px 61px 0px 44px;
}
.page::-webkit-scrollbar {
  width: 6px;
  background: #f5f7fa;
  mix-blend-mode: normal;
  border-radius: 4px;
  margin: 6px;
}
.page::-webkit-scrollbar-thumb {
  background-color: #e0e6f0;
  border-radius: 4px;
}

::-webkit-scrollbar-button {
  background-image: url('');
  background-repeat: no-repeat;
  height: 0;
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: #ecedee;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0;
  background-color: #dadada;
  border-radius: 0;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #dadada;
}

::-webkit-resizer {
  background-image: url('');
  background-repeat: no-repeat;
  height: 0;
  width: 4px;
}

::-webkit-scrollbar {
  width: 4px;
}
</style>
