import axios from "axios";
import BestSellers from "../components/BestSellers";
import CardSeller from "../components/CardSeller";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import { Await, useLoaderData } from "react-router-dom";
// no defer for v7 of react router
// import { defer } from "react-router";

import { Suspense } from "react";
import { Oval } from "react-loader-spinner";
import CartEmpty from "../components/CartEmpty";
import SwipeComponent from "../components/SwipeComponent";

function Home() {
  const data = useLoaderData();
  console.log("data", data, data.bestSelling);

  return (
    <>
      <SwipeComponent
        slides={[
          <Hero image="hero-1" />,
          <Hero image="image-1" />,
          <Hero image="image-2" />,
        ]}
      ></SwipeComponent>
      {/* <Hero /> */}
      <Suspense fallback={<CartEmpty />}>
        <Await resolve={data.bestSelling}>
          {(products) => (
            <BestSellers
              heading=" Best selling"
              title=" BestSelling products"
              products={products}
            />
          )}
        </Await>
      </Suspense>

      <Suspense fallback={<CartEmpty />}>
        <Await resolve={data.featuredProducts}>
          {(products) => (
            <BestSellers
              heading=" Featured products"
              title=" Featured products"
              products={products}
            />
          )}
        </Await>
      </Suspense>

      <Suspense fallback={<Oval width={6} color="green" strokeWidth={2} />}>
        <Await resolve={data.newInStore}>
          {(products) => (
            <BestSellers
              heading=" New in store"
              title=" The latest products in our store"
              products={products}
            />
          )}
        </Await>
      </Suspense>
    </>
  );
}

async function loaderBestSelling() {
  const { data } = await axios.get(
    "https://dummyjson.com/products?limit=12&skip=1",
  );

  if (!data) {
    throw new Response(JSON.stringify({ message: "no data for cart" }), {
      status: 400,
    });
  }
  return data.products;
}
async function loaderFeauturedProducts() {
  const { data } = await axios.get(
    "https://dummyjson.com/products?limit=12&skip=2",
  );

  if (!data) {
    throw new Response(JSON.stringify({ message: "no data for cart" }), {
      status: 400,
    });
  }
  return data.products;
}

async function loaderNewInStore() {
  const { data } = await axios.get(
    "https://dummyjson.com/products?limit=12&skip=3",
  );

  if (!data) {
    throw new Response(JSON.stringify({ message: "no data for cart" }), {
      status: 400,
    });
  }
  return data.products;
}

export async function loader() {
  return {
    bestSelling: await loaderBestSelling(),
    featuredProducts: loaderFeauturedProducts(),
    newInStore: loaderNewInStore(),
  };
}

export default Home;
