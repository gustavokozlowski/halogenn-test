import Header from "@/components/header/header";
import Item from "@/components/item/item";
import styles from "@/styles/modules/home/Home.module.scss";
import Image from "next/image";
import { data } from "@/utils/data";

export default function Content() {
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
            {data.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                note={item.note}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>
        <section id={styles["about-us"]}>
          <h1>Sobre nós</h1>
          <div>
            <ul>
              <li>
                <p>
                  Somos mais do que uma empresa, somos tudo que você precisa!
                </p>
              </li>
              <li>
                <p>
                  Temos uma equipe focada em resolver tudo da forma mais
                  acessível possível.
                </p>
              </li>
              <li>
                <p>
                  Levamos a todos os nossos clientes praticidade e um
                  atendimento personalisado.
                </p>
              </li>
              <li>
                <p>Estamos importando & exportando soluções.</p>
              </li>
              <li>
                <p>
                  Estamos há mais de 30 anos atuando com mais de 10 mil clientes
                  nacionais e internacionais!
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* PARAMOS AQUI NA CRIAÇÃO DA SECTION CONTATO Adicionar as redes sociais */}
        <section id={styles["contact"]}>
          <h1>Contato</h1>
          <div>
            <Image
              className={styles["social-media"]}
              src="/social/icon-whatsapp.png"
              alt="okay"
              width={50}
              height={50}
            />

            <Image
              className={styles["social-media"]}
              src="/social/icon-linkedin2.png"
              alt="okay"
              width={50}
              height={50}
            />

            <Image
              className={styles["social-media"]}
              src="/social/icon-instagram.png"
              alt="okay"
              width={50}
              height={50}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
