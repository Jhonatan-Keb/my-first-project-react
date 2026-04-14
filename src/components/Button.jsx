function Button({ text, onClick, tipo, type = "button" }) {
  return (
    <button
      type={type}
      className="btn"
      onClick={onClick}
      style={tipo === "secondary" ? { backgroundColor: "var(--text-muted)" } : {}}
    >
      {text}
    </button>
  )
}

export default Button