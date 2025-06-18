import { Container } from "@/components/Container";
import { ContentPostHeading } from "@/components/ContentPostHeading";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostFeatured } from "@/components/PostFeatured";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";


export default async function Home() {

  return (

    <Container>
      <Header />
      <PostFeatured />
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>

  );
}
