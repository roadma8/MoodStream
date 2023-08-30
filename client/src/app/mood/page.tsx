"use client";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  MantineProvider,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import axios from "axios";

export const emojis = [
  { mood: "Happy", emoji: "😄" },
  { mood: "Joyful", emoji: "😃" },
  { mood: "Excited", emoji: "🎉" },
  { mood: "Ecstatic", emoji: "🌟" },
  { mood: "Content", emoji: "😊" },
  { mood: "Relieved", emoji: "😌" },
  { mood: "Peaceful", emoji: "🌈" },
  { mood: "Lively", emoji: "🎈" },
  { mood: "Energetic", emoji: "💥" },
  { mood: "Amused", emoji: "😆" },
  { mood: "Cheerful", emoji: "🌞" },
  { mood: "Playful", emoji: "🤪" },
  { mood: "Optimistic", emoji: "🌼" },
  { mood: "Blissful", emoji: "😇" },
  { mood: "Grateful", emoji: "🙏" },
  { mood: "Inspired", emoji: "💡" },
  { mood: "Calm", emoji: "😌" },
  { mood: "Relaxed", emoji: "🧘" },
  { mood: "Cool", emoji: "😎" },
  { mood: "Confident", emoji: "🚀" },
  { mood: "Adventurous", emoji: "🌍" },
  { mood: "Courageous", emoji: "🦸‍♂️" },
  { mood: "Eager", emoji: "🤩" },
  { mood: "Amazed", emoji: "😲" },
  { mood: "Fulfilled", emoji: "🌺" },
  { mood: "Hopeful", emoji: "🌼" },
  { mood: "Grinning", emoji: "😁" },
  { mood: "Thrilled", emoji: "🤗" },
  { mood: "Wonderful", emoji: "❤️" },
  { mood: "Loved", emoji: "💖" },
  { mood: "Proud", emoji: "🥰" },
  { mood: "Optimistic", emoji: "😄" },
  { mood: "Elated", emoji: "🥳" },
  { mood: "Amorous", emoji: "😍" },
  { mood: "Vibrant", emoji: "💃" },
  { mood: "Enthusiastic", emoji: "🕺" },
  { mood: "Free", emoji: "🌄" },
  { mood: "Gleeful", emoji: "😀" },
  { mood: "Triumphant", emoji: "🏆" },
  { mood: "Playful", emoji: "🙃" },
  { mood: "Jovial", emoji: "😋" },
  { mood: "Upbeat", emoji: "⭐" },
];

export default function Mood() {
  const handleMood = async (mood: string) => {
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/moods", {
        caption: mood,
        userId: "64edba976d47bf944324e7fb",
      });
      console.log(data, "just data");
    } catch (e: any) {
      console.log("something went wrong", e.message);
    }
  };
  return (
    <Container size={800} my={30}>
      <Title align="center" mb={10} color="white" order={3}>
        How do you feel?
      </Title>
      <Paper
        mt={30}
        withBorder
        radius="md"
        shadow="md"
        p={50}
        style={{ height: "auto" }}
        className="card__mood"
      >
        <Flex
          direction="row"
          wrap="wrap"
          gap={10}
          justify="center"
          align="center"
        >
          {emojis.map((el: any) => (
            <Card
              shadow="md"
              padding={10}
              style={{ width: 100, cursor: "pointer" }}
              radius="md"
              withBorder
              onClick={() => handleMood(el.mood)}
              className="card__emoji"
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{el.emoji}</Text>
                <Text
                  fz="lg"
                  sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                  fw={500}
                >
                  {el.mood}
                </Text>
              </Box>
            </Card>
          ))}
        </Flex>
      </Paper>
    </Container>
  );
}
