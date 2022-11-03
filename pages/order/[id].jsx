import styles from "../../styles/Order.module.css"
import Image from "next/image"

const order = () => {

  const status = 0

  const statusClass = (index) => {
    if(index-status < 1) return styles.done
    if(index-status === 1) return styles.inProgress
    if(index-status > 1) return styles.undone
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.id}>#1324354885756</span>
                </td>
                <td>
                  <span className={styles.name}>Taiwo</span>
                </td>
                <td>
                  <span className={styles.address}>Lipton Hotel, Ikeja Lagos</span>
                </td>
                <td>
                  <span className={styles.total}>$39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="paid-icon" width="30px" height="30px" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="paid-icon" width="20px" height="20px" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="paid-icon" width="30px" height="30px" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="paid-icon" width="20px" height="20px" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="paid-icon" width="30px" height="30px" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="paid-icon" width="20px" height="20px" />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="paid-icon" width="30px" height="30px" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="paid-icon" width="20px" height="20px" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <div className={styles.title}>CART TOTAL</div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  )
}

export default order