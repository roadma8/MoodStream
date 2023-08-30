"use client";
import { Box, Card, Container, Flex, Text } from "@mantine/core";
import { emojis } from "./mood/page";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };
  console.log(emojis.length, "length");
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "auto",
      }}
    >
      <Flex direction="row" gap={10} justify="center" align="center">
        {emojis.map((el: any) => (
          <Card
            shadow="md"
            padding={10}
            style={{
              width: 110,
              height: 110,
              margin: "0 10px",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            radius="md"
            withBorder
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
    </Container>
  );
}
