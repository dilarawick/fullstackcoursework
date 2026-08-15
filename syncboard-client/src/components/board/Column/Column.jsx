function Column({ title, children }) {
  return (
    <section className="column">
      <h2 className="column__title">{title}</h2>
      <div className="column__tasks">{children}</div>
    </section>
  )
}

export default Column
