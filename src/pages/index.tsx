import Header from "@/components/header/header";
import Item from "@/components/item/item";
import styles from "@/styles/modules/home/Home.module.scss";
import Image from "next/image";
// PAREAMOS NA PARTE DE EDITAR O MENU
export default function Home() {
  return (
    <div className={styles["container-home"]}>
      <Header />
      <main className={styles["content-home"]}>
        <div className={styles["block"]}>
          <Image
            id={styles["label"]}
            src="/menu/Component 4.svg"
            alt="okay"
            width={0}
            height={0}
          />
        </div>
        <div className={styles["menu"]}>
          <div className={styles["item"]}>
            <header>
              <h3>produtos</h3>
            </header>
            <div className={styles["item-content"]}>
              <div>
                <Image
                  className={styles["icon-menu-alternative"]}
                  src="/menu/Vector-3.svg"
                  alt="okay"
                  width={0}
                  height={0}
                />
              </div>
              <p>Vidrarias e</p>
              <p>Equipamentos</p>
            </div>
          </div>
          <div className={styles["item-alternative"]}>
            <header>
              <h3>químicos</h3>
            </header>
            <div className={styles["item-content"]}>
              <div>
                <Image
                  className={styles["icon-menu"]}
                  src="/menu/Vector.svg"
                  alt="okay"
                  width={0}
                  height={0}
                />
                <Image
                  className={styles["icon-menu-small"]}
                  src="/menu/Vector-1.svg"
                  alt="okay"
                  width={0}
                  height={0}
                />
              </div>
              <p>Materiais</p>
              <p>Químicos</p>
            </div>
          </div>
          <div className={styles["item"]}>
            <header>
              <h3>laboratórios</h3>
            </header>
            <div className={styles["item-content"]}>
              <div>
                <Image
                  className={styles["icon-menu-alternative"]}
                  src="/menu/Vector-2.svg"
                  alt="okay"
                  width={0}
                  height={0}
                />
              </div>
              <p>Ferramentas</p>
              <p>e utensílios</p>
            </div>
          </div>
        </div>
        <section id={styles["products"]}>
          <h1>Produtos</h1>
          <div>
            <Item />
          </div>
          
        </section>
      </main>
    </div>
  );
}
