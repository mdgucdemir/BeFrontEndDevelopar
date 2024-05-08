import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

export default function EditScreen({ route, navigation }) {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  const id = route.params.id;
  return (
    <BlogPostForm
      isEditable={true}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
        // ==>[ navigation.pop() ]<== bir onceki sayfaya gider
      }}
    />
  );
}

const styles = StyleSheet.create({});
