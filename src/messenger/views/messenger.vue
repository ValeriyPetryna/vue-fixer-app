<template>
  <div class="views">
    <aside-component />
    <section class="content">
      <header-component />
      <section class="chats">
        <div class="chats__list">
          <div class="chats__list__dialogs favorites">
            <div class="chats__list__dialog">
              <div class="chats__list__dialog--date">
                9:32
              </div>
              <div class="chats__row">
                <div class="chats__list__dialog--avatar">
                  <img src="@/assets/miranda.svg">
                </div>
                <div class="chats__list__dialog__details">
                  <div class="chats__list__dialog__details--name">
                    Miranda Hops<span class="user_status" />
                    <div class="user__silent">
                      <img src="@/assets/silentmode.svg">
                    </div>
                  </div>
                  <div class="chats__list__dialog__details--message">
                    Excepteur sint occaecatar&mldr;
                  </div>
                </div>
              </div>
            </div>
            <div class="chats__list__dialog">
              <div class="chats__list__dialog--date">
                9:36
              </div>
              <div class="chats__row">
                <div class="chats__list__dialog--avatar">
                  <img src="@/assets/barry.svg">
                </div>
                <div class="chats__list__dialog__details">
                  <div class="chats__list__dialog__details--name">
                    Barry Callebaut
                  </div>
                  <div class="chats__list__dialog__details--message">
                    Nemo enim ipsam volupta&mldr;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chats__list__dialogs">
            <div class="chats__list__dialog">
              <div class="chats__list__dialog--date">
                9:37
              </div>
              <div class="chats__row">
                <div class="chats__list__dialog--avatar">
                  <img src="@/assets/stacey.svg">
                </div>
                <div class="chats__list__dialog__details">
                  <div class="chats__list__dialog__details--name">
                    Stacey Dosh<span class="user_status" />
                  </div>
                  <div class="chats__list__dialog__details--message">
                    Ut enim ad minima veniam&mldr;
                  </div>
                </div>
              </div>
            </div>
            <div class="chats__list__dialog">
              <div class="chats__list__dialog--date">
                9:38
              </div>
              <div class="chats__row">
                <div class="chats__list__dialog--avatar">
                  <img src="@/assets/johny.svg">
                </div>
                <div class="chats__list__dialog__details">
                  <div class="chats__list__dialog__details--name">
                    Michael Kors
                  </div>
                  <div class="chats__list__dialog__details--message">
                    To take a trivial example&mldr;
                  </div>
                </div>
              </div>
            </div>
            <div class="chats__list__dialog">
              <div class="chats__list__dialog--date">
                9:42
              </div>
              <div class="chats__row">
                <div class="chats__list__dialog--avatar">
                  <img src="@/assets/johny.svg">
                </div>
                <div class="chats__list__dialog__details">
                  <div class="chats__list__dialog__details--name">
                    Johny Cash<span class="user_status" />
                  </div>
                  <div class="chats__list__dialog__details--message">
                    Great explorer of the truth&mldr;
                  </div>
                </div>
              </div>
            </div>
            <div class="chats__list__dialog">
              <div class="chats__list__dialog--date">
                10:52
              </div>
              <div class="chats__row">
                <div class="chats__list__dialog--avatar">
                  <img src="@/assets/staceyjosh.svg">
                </div>
                <div class="chats__list__dialog__details">
                  <div class="chats__list__dialog__details--name">
                    Stacey Dosh
                  </div>
                  <div class="chats__list__dialog__details--message">
                    Ut enim ad minima veniam&mldr;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat">
          <div class="chat__search-form">
            <input
              class="chat__search-form__input"
              type="text"
              placeholder="Search message..."
            >
          </div>
          <div class="chat__messages">
            <time>
              <div class="chat__messages__date">Today, 20.06.2019</div>
            </time>
            <div class="message-box">
              <div class="chat-message">
                <div class="chat-message__avatar">
                  <img src="@/assets/barry.svg">
                </div>
                <div class="chats__row">
                  <div class="chat-message__text">
                    On the other hand....
                  </div>
                  <time class="chat-message__time">01:14</time>
                </div>
              </div>
            </div>
            <div class="message-box">
              <div class="chat-message">
                <div class="chat-message__avatar">
                  <img src="@/assets/barry.svg">
                </div>
                <div class="chats__row">
                  <div class="chat-message__text">
                    On the other hand, we denounce with....
                  </div>
                  <time class="chat-message__time">01:14</time>
                </div>
              </div>
            </div>
            <div class="message-box">
              <div class="chat-message">
                <div class="chat-message__avatar">
                  <img src="@/assets/barry.svg">
                </div>
                <div class="chats__row">
                  <div class="chat-message__text">
                    On the other hand, we denounce with righteous indignation!
                  </div>
                  <time class="chat-message__time">01:14</time>
                </div>
              </div>
            </div>
            <div class="message-box">
              <div class="chat-message right">
                <div class="chats__row">
                  <div class="chat-message__text">
                    Which is the same as saying??????? On the other hand, we
                    denounce with righteous indignation!
                  </div>
                  <time class="chat-message__time">01:46</time>
                </div>
              </div>
            </div>
            <div class="message-box">
              <div class="chat-message right">
                <div class="chats__row">
                  <div class="chat-message__text">
                    Ut enim ad minima veniam&mldr;??? To take a trivial example&mldr;
                  </div>
                  <time class="chat-message__time">01:46</time>
                </div>
              </div>
            </div>
            <div class="message-box">
              <div class="chat-message">
                <div class="chat-message__avatar">
                  <img src="@/assets/barry.svg">
                </div>
                <div class="chats__row">
                  <div class="chat-message__text">
                    But in certain circumstances and owing to the claims of
                    duty or the obligations of business it will frequently
                    occur that pleasures
                  </div>
                  <time class="chat-message__time">01:47</time>
                </div>
              </div>
            </div>
            <div class="message-box">
              <div class="chat-message right">
                <div class="chats__row">
                  <div class="chat-message__text">
                    To take a trivial example, which of us ever undertakes)
                  </div>
                  <time class="chat-message__time">01:48</time>
                </div>
              </div>
            </div>
          </div>
          <div class="chat__send-form">
            <input
              class="chat__send-form__input"
              type="text"
              placeholder="Write a message..."
            >
            <div class="chat__send-form__tools">
              <a
                class="chat__send-form__emoji"
                href="#"
              ><img src="@/assets/smile.svg"></a><a
                class="chat__send-form__file"
                href="#"
              ><img src="@/assets/sendfile.svg"></a><a
                class="chat__send-form__send-button"
                href="#"
              ><img src="@/assets/send.svg"></a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import asideComponent from '@/messenger/components/aside';
import headerComponent from '@/components/headerComponent';

export default {
  name: 'Messenger',
  components: { asideComponent, headerComponent },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="css">
.chats {
  width: 92%;
  height: 660px;
  margin: 70px 22px 0 70px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(153, 163, 174, 0.06);
  border-radius: 4px;
}

.chats__row {
  margin-top: 6px;
  display: flex;
}

.chats__list {
  width: 300px;
  border-right: 1px solid #edf0f4;
}

.chats__list__dialogs {
  background: #fff;
}
.chats__list__dialogs.favorites {
  background: #f7f9fc;
}

.chats__list__dialog {
  position: relative;
  width: 100%;
  height: 90px;
}
.chats__list__dialog:hover {
  box-shadow: 0px 5px 5px rgba(190, 200, 212, 0.2), 0px -5px 5px rgba(224, 224, 224, 0.15);
}

.chats__list__dialog--date {
  width: 100%;
  text-align: right;
  font-size: 12px;
  line-height: 25px;
  color: #9ba0ad;
  margin-left: -10px;
}

.chats__list__dialog__details {
  margin-left: 14px;
}

.chats__list__dialog--avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
}

.chats__list__dialog__details--name {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.571429px;
  display: inline-flex;
  color: #01134e;
}

.user_status {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0ad69c;
}

.chats__list__dialog__details--message {
  font-size: 14px;
  line-height: 18px;
  color: #252f48;
  opacity: 0.43;
}

.chat {
  width: 100%;
  position: relative;
}

.chat__search-form {
  border-bottom: 1px solid #f5f6f9;
}

.chat__search-form__input {
  margin-left: 46px;
  height: 47px;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #252f48;
  opacity: 0.2;
  width: 100%;
}

.chat__send-form__file {
  color: transparent;
  width: 21px;
  height: 21px;
  margin-right: 15px;
  position: relative;
}

.chat__send-form {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(153, 163, 174, 0.14654);
}

.chat__send-form__input {
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #252f48;
  opacity: 0.2;
  width: 90%;
  height: 61px;
  padding-left: 31px;
}

.chat__send-form__send-button {
  display: inline-block;
  box-shadow: 0px 0px 15px rgba(153, 163, 174, 0.25926);
  border-radius: 7px;
  background: #fff;
  width: 36px;
  height: 36px;
  text-decoration: none;
  outline: none;
  text-align: center;
  line-height: 45px;
}
.chat__send-form__send-button > img {
  width: 20px;
}

.chat__send-form__emoji {
  text-decoration: none;
  position: relative;
  margin: 25px;
}
.chat__send-form__emoji > img {
  width: 18px;
}

.chat__send-form__tools {
  position: absolute;
  right: 0;
  display: inline-block;
  padding-right: 20px;
  height: 70%;
  margin: 14px 20px 0 0;
  background: #fff;
}

.chat__messages__date {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #caced9;
}

.chat__messages {
  height: 550px;
  overflow-y: scroll;
}

.chat-message {
  display: table;
  position: relative;
  margin-left: 20px;
}
.chat-message .chats__row {
  margin-top: 0;
  width: 300px;
  background: #f7f9fc;
  border-radius: 5px;
  margin-left: 45px;
}

.chat-message__avatar > img {
  position: absolute;
  bottom: 0;
  height: 36px;
  width: 36px;
}

.chat-message__text {
  margin: 13px 16px 13px 8px;
}

.chat-message__time {
  position: absolute;
  font-size: 12px;
  color: #9ba0ad;
  bottom: 5px;
  right: 5px;
}

.message-box {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.right {
  margin-left: auto;
  margin-right: 20px;
}

.chat__messages::-webkit-scrollbar {
  width: 7px;
}

.chat__messages::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.chat__messages::-webkit-scrollbar-thumb {
  background: #cac9c9;
  border-radius: 10px;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
}

.content {
  width: 100%;
  background: #f8f9fb;
}
</style>
