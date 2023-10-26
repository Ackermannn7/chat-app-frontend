import React from "react";

import "./Home.scss";
import Message from "../../components/Message";

const Home = () => {
  return (
    <div className="Home">
      <Message
        user={{
          fullName: "Ivan Kartavy",
          avatar:
            "https://images.unsplash.com/photo-1697676326755-c5bb361bfd5b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        }}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3",
          },
        ]}
        text="Lorem ipsum dolor sit amet."
        date="Thu Oct 19 2023 22:16:23"
      />
      <Message
        user={{
          fullName: "Aleksey Rudyk",
          avatar:
            "https://images.unsplash.com/photo-1697143493170-8cf836596b34?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        text="Lorem ipsum dolor sit amet."
        date="Thu Oct 20 2023 01:10:23"
        isMe={true}
        isChecked={true}
      />
    </div>
  );
};

export default Home;
