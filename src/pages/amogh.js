import Head from "next/head";
import Post from "@/components/Post";
import SuggestionBox from "@/components/SuggestionBox";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Post.module.css";
import Router from "next/router";
import { motion } from "framer-motion";
export default function Post1() {
  function handleButton() {
    Router.push("/aman");
  }
  return (
    <>
      <Head>
        <title>Social Media/Amogh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />
        <div className="bodyContainer">
          <SuggestionBox peopleData={"data"} />
          <div className={styles.posts__container}>
            <Post
              username={"Amogh"}
              hasImage={true}
              postId={"i"}
              hasLiked={false}
              ishisFriend={true}
            />
            <Post
              username={"Amit"}
              hasImage={false}
              postId={"i"}
              hasLiked={true}
              ishisFriend={true}
            />
            <Post
              username={"Aman"}
              hasImage={true}
              postId={"i"}
              hasLiked={false}
              ishisFriend={true}
            />
            <Post
              username={"Nishant"}
              hasImage={true}
              postId={"i"}
              hasLiked={false}
              ishisFriend={false}
            />
          </div>
        </div>
      </main>
    </>
  );
}
