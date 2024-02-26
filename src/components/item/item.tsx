import styles from "@/styles/modules/item/Item.module.scss";
import { Rating } from "react-simple-star-rating";
import { Product } from "@/types/product";

export default function Item(product: Product) {
  return (
    <div className={styles["item-container"]}>
      <img
        className={styles["item-image"]}
        src={`/products/${product.image} `}
        alt="okay"
      />
      <div className={styles["item-content"]}>
        <div>
          <h2 id={styles["item-name"]}>{product.name}</h2>
          <span>
            <p id={styles["item-note"]}>
              Nota:{" "}
              <Rating
                initialValue={product.note}
                readonly
                size={20}
                allowFraction
              />{" "}
            </p>
            <p id={styles["item-price"]}>R$: {product.price}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
