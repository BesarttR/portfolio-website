function Contact() {
  return (
    <section 
      id="contact"
  style={{
    backgroundColor: "#d9dce0",
    color: "#111827",
    padding: "40px 20px",
    width: "100%",
    textAlign:"center",
  }}
    >
      <h2 style={{ marginBottom: "20px" }}>Contact Me</h2>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        <strong>Email:</strong>{" "}
        <a 
          href="mailto:besartr1995@gmail.com" 
          style={{ 
            color: "#111827",
            textDecoration: "none",
            paddingBottom: "2px"
          }}
        >
          besartr1995@gmail.com
        </a>
      </p>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        <strong>Phone / WhatsApp:</strong>{" "}
        <a
          href="https://wa.me/38970424069"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#111827",
            textDecoration: "none",
            paddingBottom: "2px"
          }}
        >
          +389 70 424 069
        </a>
      </p>

      <p style={{ fontSize: "18px" }}>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/besart-ramadani-5289bb2a3"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            color: "#111827",
            textDecoration: "none",
            paddingBottom: "2px"
          }}
        >
          Besart Ramadani
        </a>
      </p>
    </section>
  );
}

export default Contact;
