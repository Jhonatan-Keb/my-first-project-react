function Button({ text, onClick, tipo }) {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={tipo === "secondary" ? { backgroundColor: "var(--text-muted)" } : {}}
    >
      {text}
    </button>
  )
}

export default Button