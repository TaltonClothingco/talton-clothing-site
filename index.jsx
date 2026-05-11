export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#2b1b14",
      color: "#f5efe6",
      fontFamily: "Georgia, serif"
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: "#3a241a",
        borderBottom: "1px solid #5a3a2a",
        padding: "24px"
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h1>Talton Clothing Co.</h1>
          <nav>
            <a href="#ebay" style={linkStyle}>eBay Collection</a>
            <a href="#handmade" style={linkStyle}>Handmade Neckties</a>
            <a href="#about" style={linkStyle}>About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: "42px" }}>
          Classic Menswear. Purpose Reclaimed.
        </h2>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          Handcrafted neckwear and timeless men’s pieces with history, character,
          and masculine elegance.
        </p>
      </section>

      {/* eBay */}
      <section id="ebay" style={darkSectionStyle}>
        <h3>eBay Vintage Collection</h3>
        <p>
          Curated vintage and pre‑owned menswear sourced for quality and heritage.
        </p>
        <p><em>(eBay listings will appear here)</em></p>
      </section>

      {/* Handmade */}
      <section id="handmade" style={sectionStyle}>
        <h3>Handmade BDU Neckties</h3>
        <p>
          Military uniforms repurposed into handcrafted neckties and accessories.
        </p>
      </section>

      {/* About */}
      <section id="about" style={darkSectionStyle}>
        <h3>Our Story</h3>
        <p>
          Talton Clothing Co. stands at the intersection of craftsmanship,
          tradition, and purpose.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#1b100c",
        textAlign: "center",
        padding: "16px",
        fontSize: "14px",
        color: "#b6a89a"
      }}>
        © {new Date().getFullYear()} Talton Clothing Co.
      </footer>
    </div>
  );
}

const sectionStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "80px 24px",
  textAlign: "center"
};

const darkSectionStyle = {
  ...sectionStyle,
  backgroundColor: "#241611"
};

const linkStyle = {
  marginLeft: "16px",
  color: "#f5efe6",
  textDecoration: "none"
};
