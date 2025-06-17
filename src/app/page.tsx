import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


export default async function Home() {


  return (

    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="group-hover:scale-105 transition"
            src="/images/bryen_0.png" width={1200} height={720} alt="Título da imagem" />
        </Link>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iste consectetur autem, dignissimos sed temporibus quibusdam eos nisi quos corrupti corporis distinctio molestias dolorum atque nesciunt accusamus animi! Voluptatum, facilis.
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>

  );
}
