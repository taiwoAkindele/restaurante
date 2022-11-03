import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eligendi dolore corrupti perspiciatis incidunt temporibus laudantium? Asperiores, ipsum deserunt! Modi ex exercitationem odit quibusdam reprehenderit voluptatibus magnam quos deleniti quo.
        </p>
        <div className={styles.wrapper}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default ProductList