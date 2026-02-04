import { useEffect, useState } from "react";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: "20px",
    color: "#fff",
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "40px 60px",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    maxWidth: "500px",
    width: "100%",
    animation: "fadeIn 0.8s ease-out",
  },
  header: {
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "3px",
    color: "#e94560",
    marginBottom: "10px",
    fontWeight: "600",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "30px",
    background: "linear-gradient(135deg, #fff 0%, #a0a0a0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  messageBox: {
    background: "rgba(233, 69, 96, 0.1)",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid rgba(233, 69, 96, 0.3)",
  },
  message: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#fff",
    margin: 0,
  },
  status: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#888",
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#00d26a",
    boxShadow: "0 0 10px #00d26a",
    animation: "pulse 2s infinite",
  },
  timestamp: {
    fontSize: "0.8rem",
    color: "#888",
    marginTop: "15px",
  },
  footer: {
    marginTop: "30px",
    fontSize: "0.8rem",
    color: "#666",
  },
  error: {
    color: "#e94560",
    background: "rgba(233, 69, 96, 0.1)",
    padding: "10px 20px",
    borderRadius: "8px",
    marginTop: "15px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "3px solid rgba(255, 255, 255, 0.1)",
    borderTop: "3px solid #e94560",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "0 auto 20px",
  },
};

const keyframes = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/hello")
      .then((res) => {
        if (!res.ok) throw new Error("Backend connection failed");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>Brayudo Factory</div>
          <h1 style={styles.title}>Hello World</h1>

          {loading ? (
            <>
              <div style={styles.spinner}></div>
              <p style={{ color: "#888" }}>Connecting to AI Agent...</p>
            </>
          ) : error ? (
            <div style={styles.error}>⚠️ {error}</div>
          ) : (
            <>
              <div style={styles.messageBox}>
                <p style={styles.message}>{data?.message}</p>
              </div>

              <div style={styles.status}>
                <div style={styles.statusDot}></div>
                <span>Connected to Backend</span>
              </div>

              {data?.timestamp && (
                <div style={styles.timestamp}>
                  🕐 {new Date(data.timestamp).toLocaleString()}
                </div>
              )}
            </>
          )}

          <div style={styles.footer}>
            🦞 Powered by AI Agents | Built with OpenClaw + Claude
          </div>
        </div>
      </div>
    </>
  );
}
