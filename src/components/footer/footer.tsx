import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>

      <div className={styles.linkGrid}>
        <ul>
          <li>คำอธิบายเสียง</li>
          <li>นักลงทุนสัมพันธ์</li>
          <li>ประกาศแจ้งทางกฎหมาย</li>
        </ul>
        <ul>
          <li>ศูนย์ช่วยเหลือ</li>
          <li>ตำแหน่งงาน</li>
          <li>การตั้งค่าคุกกี้</li>
        </ul>
        <ul>
          <li>บัตรของขวัญ</li>
          <li>ข้อกำหนดการใช้งาน</li>
          <li>ข้อมูลบริษัท</li>
        </ul>
        <ul>
          <li>ศูนย์สื่อมวลชน</li>
          <li>ความเป็นส่วนตัว</li>
          <li>ติดต่อเรา</li>
        </ul>
      </div>

      <button className={styles.serviceCode}>รหัสบริการ</button>
      <p className={styles.copy}>&copy; 1997–2025 Netflix, Inc.</p>
    </footer>
  );
};

export default Footer;
