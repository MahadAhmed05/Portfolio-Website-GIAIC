import Link from "next/link";
import "../styles/Contact.css";
function ContactLinks() {
  return (
    <div className="contact">
      <h1>Find Me At</h1>
      <div className="link-container">
        <Link
          href={"https://www.linkedin.com/in/muhammad-mahad-ahmed-87b805278/"}
          target="_blank"
        >
          <div>LinkedIn</div>
        </Link>
        <Link href={""}>
          <div>FaceBook</div>
        </Link>
        <Link href={"https://github.com/MahadAhmed05"} target="_blank">
          <div>GitHub</div>
        </Link>
      </div>
    </div>
  );
}

export default ContactLinks;
