import Header from "@/components/header/header";
import Item from "@/components/item/item";
import styles from "@/styles/modules/home/Home.module.scss";
import Image from "next/image";
import { data } from "@/utils/data";
import Footer from "@/components/footer";
import Content from "@/components/content";
// PAREAMOS NA PARTE DE EDITAR O MENU
export default function Home() {
  return (
    <>
      <Content />
      <Footer />
    </>
  );
}
